<template>
  <section id="mensagem" class="container" tabindex="0">
    <div class="voice-message">
      <div class="voice-message__formSection">
        <Card
          class="voice-message__card voice-message__normalCard"
          :alternate="true"
        >
          <h1 class="voice-message__cardHeading">{{ cardInfo.headline }}</h1>
          <img
            class="voice-message__cardImg"
            :src="cardInfo.img"
            role="presentation"
            alt=""
          />
          <p class="voice-message__cardDescription">
            {{ cardInfo.description }}
          </p>
        </Card>
        <Card
          class="voice-message__card voice-message__formCard"
          :alternate="true"
        >
          <p class="voice-message__formSectionLabel">
            {{ localI18n['voice-message.form-label'] }}
          </p>
          <form
            class="voice-message__form"
            method="post"
            novalidate
            @submit="checkForm"
          >
            <div class="voice-message__inputGroup">
              <input
                v-model="messagePackage.from"
                class="voice-message__formInput"
                :placeholder="localI18n['voice-message.from']"
                type="text"
              />
              <select
                v-model="messagePackage.parish"
                class="voice-message__formInput voice-message__formSelect"
              >
                <option value="" disabled>{{
                  localI18n['voice-message.parish']
                }}</option>
                <option value="Anjos">Anjos</option>
                <option value="Lumiar">Lumiar</option>
                <option value="Baixa">Baixa</option>
                <option value="Graça">Graça</option>
              </select>
            </div>
            <span
              v-if="triedToSend && !messagePackage.parish"
              class="voice-message__warning"
            >
              {{ localI18n['voice-message.error.parish'] }}
            </span>
            <span
              v-if="triedToSend && !messagePackage.from"
              class="voice-message__warning"
            >
              {{ localI18n['voice-message.error.from'] }}
            </span>
            <div class="voice-message__inputGroup">
              <input
                v-model="messagePackage.recipient"
                class="voice-message__formInput"
                :placeholder="localI18n['voice-message.recipient']"
                type="text"
              />
              <input
                v-model="messagePackage.street"
                class="voice-message__formInput"
                :placeholder="localI18n['voice-message.street']"
                type="text"
              />
            </div>
            <span
              v-if="triedToSend && !messagePackage.street"
              class="voice-message__warning"
            >
              {{ localI18n['voice-message.error.street'] }}
            </span>
            <span
              v-if="triedToSend && !messagePackage.recipient"
              class="voice-message__warning"
            >
              {{ localI18n['voice-message.error.recipient'] }}
            </span>
            <input
              v-model="messagePackage.streetNumber"
              class="voice-message__formInput"
              :placeholder="localI18n['voice-message.streetNumber']"
              type="text"
            />
            <span
              v-if="triedToSend && !messagePackage.streetNumber"
              class="voice-message__warning"
            >
              {{ localI18n['voice-message.error.streetNumber'] }}
            </span>
            <div class="voice-message__recording">
              <audio
                v-if="messagePackage.audioMessage"
                class="voice-message__audio"
                :src="audioPlayback"
                controls
              ></audio>
              <div v-if="blockedWarning" class="voice-message__warning">
                {{ localI18n['voice-message.blockedWarning'] }}
              </div>
              <span
                v-if="triedToSend && !messagePackage.audioMessage"
                class="voice-message__warning"
              >
                {{ localI18n['voice-message.error.audioMessage'] }}
              </span>
              <div class="voice-message__btnGroup">
                <Button
                  v-if="!isRecording"
                  class="voice-message__button"
                  kind="primary"
                  @click="startRecording"
                >
                  <MicNone
                    decorative
                    :size="16"
                    class="voice-message__buttonIcon"
                  />{{ localI18n['voice-message.record-btn.start'] }}
                </Button>
                <Button
                  v-else
                  class="voice-message__button"
                  kind="secondary"
                  @click="stopRecording"
                >
                  <MicNone
                    decorative
                    :size="16"
                    class="voice-message__buttonIcon"
                  />{{ localI18n['voice-message.record-btn.stop'] }}
                </Button>
                <Button
                  class="voice-message__button"
                  kind="primary"
                  type="submit"
                  :disabled="isRecording || messageSent"
                >
                  {{ localI18n['voice-message.send-btn'] }}
                </Button>
              </div>
            </div>
            <p class="voice-message__hint">
              {{ localI18n['voice-message.message.hint'] }}
            </p>
          </form>
        </Card>
        <div class="voice-message__notify">
          {{ uploadStatus }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MicRecorder from 'mic-recorder-to-mp3'
import MicNone from 'vue-material-design-icons/MicrophoneOutline.vue'
import localI18n from '../../data/resources/i18n.json'
import { uploadFile, saveData } from '../../services/firebase'
import Button from '~/components/Button/Button.vue'
import Card from '~/components/Card/Card'
export default {
  name: 'VoiceMessageSection',
  components: {
    Button,
    Card,
    MicNone
  },
  data() {
    return {
      rec: null,
      isRecording: false,
      audioPlayback: null,
      recordingTimer: null,
      blockedWarning: false,
      triedToSend: false,
      stream: null,
      progress: 0,
      maxRecordTime: 15000,
      uploadStatus: null,
      messagePackage: {
        parish: '',
        street: '',
        streetNumber: '',
        audioMessage: null
      },
      messageSent: false,
      cardInfo: {
        img: '/initiatives/voice-message__card.svg',
        headline: localI18n['voice-message.message.title'],
        description: localI18n['voice-message.message.description']
      },
      localI18n
    }
  },
  methods: {
    startRecording() {
      this.rec = new MicRecorder({ bitRate: 128 })

      try {
        this.rec
          .start()
          .then(() => {
            this.recordingTimer = setTimeout(
              this.stopRecording.bind(this),
              this.maxRecordTime
            )
            this.isRecording = true
          })
          .catch(() => {})

        this.blockedWarning = false
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
  $max-form-size: 1160px;

  margin-top: -$section-margin;
  grid-column: 1 / 7;

  &__formSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: $smoke-white;
  }

  &__formSectionLabel {
    color: $primary-color;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 30px;
  }

  &__card {
    width: 100%;
    justify-content: center;
  }

  &__formCard {
    position: relative;
    align-items: flex-start;
    margin-top: 32px;
  }

  &__recording {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }

  &__warning {
    color: red;
    font-size: 10px;
  }

  &__audio {
    width: 100%;
    margin-bottom: 20px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    background-color: $white;
    width: 100%;
  }

  &__formInput {
    font-family: Roboto, sans-serif;
    border-radius: 6px;
    border-color: $primary-color;
    height: 48px;
    width: 100%;
    padding: 9px 16px;
    font-size: 16px;
    margin-bottom: 10px;
    min-width: 0;
  }

  &__buttonIcon {
    height: 16px;
    margin-right: 8px;
  }

  &__button {
    margin-bottom: 24px;
  }

  &__formSelect {
    appearance: none;
    border: 2px solid $primary-color;
  }

  &__inputGroup {
    display: flex;
    flex-direction: column;
  }

  &__btnGroup {
    display: flex;
    flex-direction: column;
  }

  &__cardDescription {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: $gray;
    text-align: center;
    line-height: 190%;
  }

  &__cardHeading {
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 32px;
  }

  &__cardImg {
    width: 278px;
    height: 268px;
    max-width: 100%;
  }

  &__hint {
    color: $light-gray;
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  @media screen and (min-width: $max-mobile-size) {
    grid-column: 1 / 16;

    &__info {
      height: 400px;
    }

    &__formSection {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 94px 160px 106px 160px;
    }

    &__formCard {
      grid-column: 6 / 13;
      margin-top: 0;
    }

    &__normalCard {
      grid-column: 1 / 6;
    }

    &__button {
      margin-bottom: 0;
    }

    &__formInput:first-child {
      margin-right: 24px;
    }

    &__inputGroup {
      flex-direction: row;
      margin-bottom: 16px;
    }

    &__card:last-of-type {
      margin-left: 24px;
    }

    &__card {
      height: 604px;
    }

    &__btnGroup {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: $max-form-size) {
    &__formSection {
      padding: 94px 20px 106px 20px;
    }
  }
}
</style>
