<template>
  <section id="mensagem" class="container" tabindex="0">
    <div class="voice-message">
      <form
        class="voice-message__formSection"
        method="post"
        novalidate
        @submit="checkForm"
      >
        <Card
          v-if="!messageSent"
          class="voice-message__card voice-message__normalCard"
          :alternate="true"
        >
          <p class="voice-message__formSectionLabel">
            {{ localI18n['voice-message.form-label'] }}
          </p>
          <p class="voice-message__cardDescription">
            {{ localI18n['voice-message.message.description'] }}
          </p>
          <a
            href="/horario_carris.pdf"
            class="voice-message__link"
            target="_blank"
          >
            {{ localI18n['voice-message.form-schedule'] }}
          </a>
          <input
            v-model="messagePackage.from"
            class="voice-message__formInput"
            :placeholder="localI18n['voice-message.from']"
            type="text"
          />
          <span
            v-if="triedToSend && !messagePackage.from"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.from'] }}
          </span>
          <input
            v-model="messagePackage.recipient"
            class="voice-message__formInput"
            :placeholder="localI18n['voice-message.recipient']"
            type="text"
          />
          <span
            v-if="triedToSend && !messagePackage.recipient"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.recipient'] }}
          </span>
          <select
            v-model="messagePackage.parish"
            class="voice-message__formInput voice-message__formSelect"
          >
            <option value="" disabled>{{
              localI18n['voice-message.parish']
            }}</option>
            <option v-for="parish in parishes" :key="parish" :value="parish">
              {{ parish }}</option
            >
          </select>
          <span
            v-if="triedToSend && !messagePackage.parish"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.parish'] }}
          </span>
          <input
            v-model="messagePackage.street"
            class="voice-message__formInput"
            :placeholder="localI18n['voice-message.street']"
            type="text"
          />
          <span
            v-if="triedToSend && !messagePackage.street"
            class="voice-message__warning"
          >
            {{ localI18n['voice-message.error.street'] }}
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
        </Card>
        <Card
          v-if="!messageSent"
          class="voice-message__card voice-message__formCard"
          :alternate="true"
        >
          <p class="voice-message__formSectionLabel">
            {{ localI18n['voice-message.form-label1'] }}
          </p>
          <p class="voice-message__cardDescription">
            {{ localI18n['voice-message.message.hint'] }}
          </p>
          <button
            v-if="!isRecording"
            class="voice-message__recordBtn"
            type="button"
            @click="startRecording"
          >
            <MicNone decorative :size="46" class="voice-message__buttonIcon" />
          </button>
          <button
            v-if="isRecording"
            class="voice-message__recordBtn"
            type="button"
            @click="stopRecording"
          >
            <div class="voice-message__recordBtnSquare"></div>
          </button>
          <p class="voice-message__hint">
            {{
              isRecording
                ? localI18n['voice-message.recordLabelStop']
                : localI18n['voice-message.recordLabel']
            }}
          </p>
          <audio
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
        </Card>
        <Card
          v-if="messageSent"
          class="voice-message__card voice-message__notificationCard"
          :alternate="true"
        >
          <h2 class="voice-message__submitTitle">
            {{ localI18n['voice-message.form-label2'] }}
          </h2>
          <p class="voice-message__submitDescription">
            {{ localI18n['voice-message.form-submitDescription'] }}
          </p>
          <p class="voice-message__notify">ID: {{ messageId }}</p>
        </Card>
        <div class="voice-message__formFooter">
          <p class="voice-message__hint">
            Os horários da iniciativa são disponibilizados diáriamente para o
            dia seguinte. Consulte os horários para mais informação.
          </p>
          <div v-if="!messageSent" class="voice-message__terms">
            {{ localI18n['voice-message.terms-conditions.label']
            }}<a href="/termos-e-condicoes.pdf" target="_blank">{{
              localI18n['voice-message.terms-conditions.link']
            }}</a>
            <input v-model="termsConditionsAccepted" type="checkbox" />
          </div>
          <div class="voice-message__btnGroup">
            <Button
              v-if="!messageSent"
              class="voice-message__button"
              kind="primary"
              type="submit"
              :disabled="
                isRecording ||
                  messageSent ||
                  !termsConditionsAccepted ||
                  loadingRequest
              "
            >
              {{
                loadingRequest
                  ? localI18n['voice-message.send-btn--loading']
                  : localI18n['voice-message.send-btn']
              }}
            </Button>
            <Button kind="secondary">
              {{ localI18n['voice-message.schedule'] }}<sub>*</sub>
            </Button>
          </div>
          <p class="voice-message__scheduleHint">
            {{localI18n['voice-message.schedule-hint']}}
          </p>
          <span v-if="hasError" class="voice-message__warning">
            {{ hasError }}
          </span>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import MicRecorder from 'mic-recorder-to-mp3'
import MicNone from 'vue-material-design-icons/MicrophoneOutline.vue'
import localI18n from '../../data/resources/i18n.json'
import { uploadFile, blobToBase64, getToken } from '../../services/API'
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
      parishes: [
        'Ajuda',
        'Alcântara',
        'Alvalade',
        'Areeiro',
        'Arroios',
        'Avenidas Novas',
        'Beato e Marvila',
        'Belém',
        'Benfica',
        'Campo de Ourique',
        'Campolie',
        'Carnide',
        'Estrela',
        'Lumiar',
        'Misericórdia e Sto António',
        'Olivais',
        'Parque das Nações',
        'Penha de França',
        'Santa Clara',
        'Sta Maria Maior',
        'S. Domingos de Benfica',
        'São Vicente'
      ],
      termsConditionsAccepted: false,
      rec: null,
      isRecording: false,
      audioPlayback: null,
      recordingTimer: null,
      blockedWarning: false,
      triedToSend: false,
      loadingRequest: false,
      stream: null,
      progress: 0,
      maxRecordTime: 15000,
      hasError: null,
      messageId: '',
      messagePackage: {
        from: '',
        recipient: '',
        parish: '',
        street: '',
        streetNumber: '',
        audioMessage: null
      },
      messageSent: false,
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
      if (
        this.messagePackage.parish &&
        this.messagePackage.recipient &&
        this.messagePackage.from &&
        this.messagePackage.street &&
        this.messagePackage.streetNumber &&
        this.messagePackage.audioMessage !== 0
      ) {
        this.messagePackage.parish.replace(/_/g, ' ').replace(/\//g, '-')
        this.messagePackage.street.replace(/_/g, ' ').replace(/\//g, '-')
        const data = { ...this.messagePackage, timestamp: Date.now() }
        delete data.audioMessage
        const base64 = await blobToBase64(this.messagePackage.audioMessage)
        this.loadingRequest = true
        const token = await getToken()
        uploadFile(base64, data, token)
          .then((data) => {
            if (!data.ok) {
              throw new Error('error')
            }
            return data.text()
          })
          .then((data) => {
            localStorage.setItem('darvoz.pt-id', token)
            this.messageId = data
            this.messageSent = true
            this.loadingRequest = false
          })
          .catch(() => {
            this.hasError = localI18n['voice-message.error']
            this.loadingRequest = false
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/_global.scss';

.voice-message {
  $max-form-size: 1160px;

  font-family: Roboto, sans-serif;
  margin-top: -$section-margin;
  margin-bottom: -$section-margin;
  grid-column: 2 / 6;

  &__formSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__formFooter {
    grid-column: 1 / 7;
  }

  &__scheduleHint {
    margin-bottom: 39px;
    color: $light-gray;
    font-size: 12px;
    text-align: center;
  }

  &__submitTitle {
    font-weight: 900;
    font-size: 48px;
    text-align: center;
    color: $primary-color;
  }

  &__submitDescription {
    font-weight: 300;
    font-size: 24px;
    line-height: 38px;
    text-align: center;
    margin-top: 34px;
    margin-bottom: 66px;
    width: 80%;
  }

  &__formSectionLabel {
    color: $primary-color;
    margin-bottom: 23px;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  &__card {
    width: 100%;
    height: 100%;
    padding: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }

  &__normalCard {
    margin-bottom: 24px;
  }

  &__recordBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 106px;
    height: 106px;
    left: 907px;
    top: 1420px;
    background-color: $salmon;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  &__recordBtnSquare {
    background-color: $white;
    height: 20px;
    width: 20px;
    border-radius: 3px;
  }

  &__recording {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }

  &__warning {
    color: red;
    font-size: 10px;
    margin-bottom: 12px;
  }

  &__audio {
    width: 100%;
    margin-bottom: 20px;
  }

  &__formInput {
    border-radius: 6px;
    height: 48px;
    width: 100%;
    padding: 9px 16px;
    font-size: 16px;
    margin-bottom: 16px;
    min-width: 0;
    border: 1px solid $border-grey;
  }

  &__buttonIcon {
    height: 46px;
    color: $white;
  }

  &__button {
    margin-bottom: 16px;
  }

  &__formSelect {
    appearance: none;
    border: 1px solid $border-grey;
    background-color: $white;
  }

  &__btnGroup {
    display: flex;
    flex-direction: column;
    margin: 24px 0;
  }

  &__cardDescription {
    font-size: 16px;
    line-height: 190%;
    text-align: center;
    color: $black;
    margin-bottom: 12px;
  }

  &__cardHeading {
    font-weight: 900;
    font-size: 32px;
  }

  &__link {
    text-decoration: underline;
    margin-bottom: 42px;
    text-align: center;
  }

  &__hint {
    color: $light-gray;
    font-size: 12px;
    margin-top: 24px;
    margin-bottom: 37px;
    text-align: center;
  }

  &__notify {
    text-align: center;
    word-break: break-all;
    font-size: 14px;
    background-color: $smoke-white;
    padding: 12px;
    border-radius: 32px;
  }

  @media screen and (min-width: $max-mobile-size) {
    grid-column: 1 / 16;

    &__info {
      height: 400px;
    }

    &__formSection {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 24px;
      padding: 94px 160px 106px 160px;

      &:before {
        content: '';
        background: url('../../assets/svg/voice-message-bg.svg') no-repeat;
        background-size: contain;
        position: absolute;
        width: 100vw;
        height: 100%;
        user-select: none;
      }
    }

    &__formCard {
      grid-column: 7 / 12;
      margin-top: 0;
    }

    &__formFooter {
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-column: 3 / 11;
      z-index: 1;
    }

    &__normalCard {
      grid-column: 2 / 7;
      margin-bottom: 0;
    }

    &__notify {
      font-size: 24px;
      padding: 24px 48px;
    }

    &__schedule {
      grid-column: 5 / 9;
    }

    &__notificationCard {
      grid-column: 2 / 12;
      max-width: 100%;
      height: 520px;
      padding-top: 80px;
      padding-bottom: 80px;
    }

    &__card {
      padding: 56px 82px;
    }

    &__btnGroup {
      flex-direction: row;
      justify-content: space-between;
    }

    &__button {
      margin-right: 16px;
      margin-bottom: 0;
    }
  }
}
</style>
