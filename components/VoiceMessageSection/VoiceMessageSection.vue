<template>
  <section class="container" tabindex="0">
    <div class="voice-message">
      <h1 class="section__title voice-message__title">
        {{ localI18n['voice-message.title'] }}
      </h1>
      <p class="section__description voice-message__description">
        Grave um video com um maximo de 30 segundos e diminua a distancia
        através da voz
      </p>
      <form
        class="voice-message__form"
        method="post"
        novalidate
        @submit="checkForm"
      >
        <label class="voice-message__formLabel">
          {{ localI18n['voice-message.parish'] }}
          <input v-model="messagePackage.parish" type="text" />
          <span
            v-if="triedToSend && !messagePackage.parish"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.parish'] }}
          </span>
        </label>
        <label class="voice-message__formLabel">
          {{ localI18n['voice-message.street'] }}
          <input v-model="messagePackage.street" type="text" />
          <span
            v-if="triedToSend && !messagePackage.street"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.street'] }}
          </span>
        </label>
        <label class="voice-message__formLabel">
          {{ localI18n['voice-message.streetNumber'] }}
          <input v-model="messagePackage.streetNumber" type="text" />
          <span
            v-if="triedToSend && !messagePackage.streetNumber"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.streetNumber'] }}
          </span>
        </label>
        <!-- <div>
          <label>
            {{ localI18n['voice-message.date'] }}
            <input id="date" v-model="messagePackage.date" type="date" />
            <span
              v-if="triedToSend && !messagePackage.date"
              class="voice-message__warning"
            >
              {{ localI18n['voice-message.error.date'] }}
            </span>
            <p v-else>Confirme o dia antes de enviar</p>
          </label>
        </div>-->
        <div class="voice-message__recording">
          <Button
            v-if="!isRecording"
            class="navigation-bar__button"
            kind="primary"
            @click="startRecording"
          >
            {{ localI18n['voice-message.record-btn.start'] }}
          </Button>
          <Button
            v-else
            class="voice-message__button"
            kind="secondary"
            @click="stopRecording"
          >
            {{ localI18n['voice-message.record-btn.stop'] }}
          </Button>
          <audio :src="audioPlayback" controls></audio>
          <div v-if="blockedWarning" class="voice-message__warning">
            {{ localI18n['voice-message.blockedWarning'] }}
          </div>
          <span
            v-if="triedToSend && !messagePackage.audioMessage"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.audioMessage'] }}
          </span>
        </div>
        <Button
          class="voice-message__button"
          kind="primary"
          type="submit"
          :disabled="isRecording || messageSent"
        >
          {{ localI18n['voice-message.send-btn'] }}
        </Button>
      </form>
      <div class="voice-message__notify">
        {{ uploadStatus }}
      </div>
    </div>
  </section>
</template>

<script>
import MicRecorder from 'mic-recorder-to-mp3'
import localI18n from '../../data/resources/i18n.json'
import { uploadFile, saveData } from '../../services/firebase'
import Button from '~/components/Button/Button.vue'
export default {
  name: 'VoiceMessageSection',
  components: {
    Button
  },
  data() {
    return {
      rec: null,
      isRecording: false,
      messageChunks: [],
      audioPlayback: null,
      recordingTimer: null,
      blockedWarning: false,
      triedToSend: false,
      stream: null,
      maxRecordTime: 30000,
      uploadStatus: null,
      messagePackage: {
        parish: '',
        street: '',
        streetNumber: '',
        audioMessage: null
      },
      messageSent: false,
      localI18n
    }
  },
  mounted() {
    if (window)
      window.AudioContext = window.AudioContext || window.webkitAudioContext
  },
  methods: {
    startRecording() {
      this.rec = new MicRecorder({ bitRate: 128 })

      try {
        this.rec.start().catch(() => {})

        this.recordingTimer = setTimeout(
          this.stopRecording.bind(this),
          this.maxRecordTime
        )
        this.blockedWarning = false
        this.isRecording = true
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.blockedWarning = true
        }
      }
    },
    stopRecording() {
      clearTimeout(this.recordingTimer)

      this.isRecording = false
      this.rec
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
          // do what ever you want with buffer and blob
          // Example: Create a mp3 file and play
          const file = new File(buffer, 'voice.mp3', {
            type: blob.type,
            lastModified: Date.now()
          })
          this.messagePackage.audioMessage = file
          this.audioPlayback = URL.createObjectURL(file)
        })
        .catch(() => {})
    },
    async checkForm(e) {
      e.preventDefault()

      this.triedToSend = true

      /* if (this.messagePackage.date) {
        const matches = /^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/.exec(
          this.messagePackage.date
        )

        if (matches == null) {
          this.messagePackage.date = null
          return false
        }

        const d = parseInt(matches[3])
        const m = parseInt(matches[2]) - 1
        const y = parseInt(matches[1])

        const composedDate = new Date(y, m, d)

        if (
          composedDate.getDate() !== d ||
          composedDate.getMonth() !== m ||
          composedDate.getFullYear() !== y
        ) {
          this.messagePackage.date = null
          return
        }
      } */

      if (
        this.messagePackage.parish &&
        this.messagePackage.street &&
        this.messagePackage.streetNumber &&
        this.messagePackage.audioMessage !== 0
      ) {
        this.messagePackage.parish.replace(/_/g, ' ').replace(/\//g, '-')
        this.messagePackage.street.replace(/_/g, ' ').replace(/\//g, '-')

        const key = await saveData(this.messagePackage)
        const fileName = `${this.messagePackage.parish}__${
          this.messagePackage.street
        }__${this.messagePackage.streetNumber + key}`

        uploadFile(this.messagePackage.audioMessage, fileName)
          .then(() => {
            this.uploadStatus = localI18n['voice-message.success']
            this.messageSent = true
          })
          .catch(() => (this.uploadStatus = localI18n['voice-message.error']))
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/_global.scss';

.voice-message {
  grid-column: 2 / 6;

  &__recording {
    display: flex;
    flex-direction: row;
    margin: 20px 0;
  }

  &__warning {
    color: red;
    font-size: 10px;
  }

  &__description {
    margin-top: 10px;
    font-size: 16px;
    color: $gray;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__formLabel {
    font-family: Muli, sans-serif;
    margin: 10px 10px 5px;
  }

  &__button {
    max-width: 20%;
  }

  @media screen and (min-width: $max-mobile-size) {
    grid-column: 2 / 14;
  }
}
</style>
