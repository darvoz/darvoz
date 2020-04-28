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
      <form class="voice-message__form" method="post" @submit="checkForm">
        <label>
          {{ localI18n['voice-message.parish'] }}
          <input v-model="messagePackage.parish" type="text" />
          <span
            v-if="triedToSend && !messagePackage.parish"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.parish'] }}
          </span>
        </label>
        <label>
          {{ localI18n['voice-message.street'] }}
          <input v-model="messagePackage.street" type="text" />
          <span
            v-if="triedToSend && !messagePackage.street"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.street'] }}
          </span>
        </label>
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
        <Button class="voice-message__button" kind="primary" type="submit">
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
        audioMessage: null
      },
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
        .catch((e) => {})
    },
    async checkForm(e) {
      e.preventDefault()

      this.triedToSend = true
      if (
        this.messagePackage.parish &&
        this.messagePackage.street &&
        this.messagePackage.audioMessage !== 0
      ) {
        this.messagePackage.parish.replace(/_/g, ' ').replace(/\//g, '-')
        this.messagePackage.street.replace(/_/g, ' ').replace(/\//g, '-')

        const key = await saveData(this.messagePackage)
        const fileName = `${this.messagePackage.parish}__${this.messagePackage.street}__${key}`

        uploadFile(this.messagePackage.audioMessage, fileName)
          .then(() => (this.uploadStatus = localI18n['voice-message.success']))
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
}
</style>
