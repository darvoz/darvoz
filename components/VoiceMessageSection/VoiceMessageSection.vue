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
          {{ localI18n['voice-message.recipient'] }}
          <input v-model="messagePackage.recipient" type="text" />
          <span
            v-if="triedToSend && !messagePackage.recipient"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.recipient'] }}
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
            class="navigation-bar__button"
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
        <Button class="navigation-bar__button" kind="primary" type="submit">
          {{ localI18n['voice-message.send-btn'] }}
        </Button>
      </form>
    </div>
  </section>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'
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
      messagePackage: {
        recipient: '',
        street: '',
        audioMessage: null
      },
      localI18n
    }
  },
  methods: {
    handleData(e) {
      this.messageChunks.push(e.data)

      if (this.rec.state === 'inactive' && this.messageChunks.length !== 0) {
        const blob = new Blob(this.messageChunks, { type: 'audio/mp3' })
        this.audioPlayback = URL.createObjectURL(blob)
        this.messagePackage.audioMessage = blob
        this.messageChunks = []
      }
    },
    handleRecording(stream) {
      this.rec = new MediaRecorder(stream)
      this.rec.addEventListener('dataavailable', this.handleData.bind(this))
    },
    async startRecording() {
      this.stream = null

      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ audio: true })

        this.handleRecording(this.stream)
        this.rec.start()

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
      this.rec.stop()

      this.stream.getTracks().forEach((track) => track.stop())
    },
    checkForm(e) {
      this.triedToSend = true
      if (
        this.messagePackage.recipient &&
        this.messagePackage.street &&
        this.messagePackage.audioMessage !== 0
      ) {
        console.log(this.messagePackage)
      }
      e.preventDefault()
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
