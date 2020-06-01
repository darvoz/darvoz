<template>
  <section id="quadra" class="container santos__container" tabindex="0">
    <div class="content">
      <div class="santos">
        <h1 class="section__title santos__headline">
          {{ localI18n['darvoz-santos.form-section.headline'] }}
        </h1>
        <p class="section__description santos__description">
          {{ localI18n['darvoz-santos.form-section.description'] }}
        </p>
        <form class="santos__formSection" novalidate @submit="checkForm">
          <Card
            v-if="!messageSent"
            class="santos__card santos_notificationCard"
            :alternate="true"
            :full="true"
          >
            <p class="santos__formSectionHeadline">
              {{ localI18n['darvoz-santos.form.headline'] }}
            </p>
            <p class="santos__cardDescription">
              {{ localI18n['darvoz-santos.form.description'] }}
            </p>
            <span v-if="hasError" class="santos__warning">
              {{ localI18n['darvoz-santos.form.error'] }}
            </span>
            <input
              v-model="data.from"
              class="santos__formInput"
              type="text"
              :placeholder="localI18n['darvoz-santos.form.from']"
              required
            />
            <span v-if="triedToSend && !data.from" class="santos__warning">
              {{ localI18n['darvoz-santos.form.error.from'] }}
            </span>
            <textarea
              v-model="data.text"
              class="santos__formInput"
              rows="4"
              :maxlength="charactersLimit"
              :placeholder="localI18n['darvoz-santos.form.text']"
              required
            />
            <span class="santos__hint"
              >Caracteres restantes:
              {{ charactersLimit - data.text.length }}</span
            >
            <span v-if="triedToSend && !data.message" class="santos__warning">
              {{ localI18n['darvoz-santos.form.error.text'] }}
            </span>
            <div class="santos__formFooter">
              <div v-if="!messageSent" class="santos__terms">
                <input v-model="termsConditionsAccepted" type="checkbox" />
                {{ localI18n['darvoz-santos.terms-conditions.label']
                }}<a
                  href="/quadras-santos-populares/termos-condicoes.pdf"
                  target="_blank"
                  >{{ localI18n['darvoz-santos.terms-conditions.link'] }}</a
                >
              </div>
              <div class="santos__btnGroup">
                <Button
                  v-if="!messageSent"
                  kind="primary"
                  type="submit"
                  :disabled="
                    !termsConditionsAccepted ||
                      !data.text ||
                      !data.from ||
                      data.text.length > charactersLimit
                  "
                >
                  {{ localI18n['darvoz-santos.form.send-btn'] }}
                </Button>
              </div>
            </div>
          </Card>
          <Card
            v-if="messageSent"
            class="santos__card santos__notificationCard"
            :alternate="true"
            :full="true"
          >
            <img src="/initiatives/santos.svg" />
            <h2 class="santos__submitTitle">
              {{ localI18n['darvoz-santos.form.submit.headline'] }}
            </h2>
            <p class="santos__submitDescription">
              {{ localI18n['darvoz-santos.form.submit.description'] }}
            </p>
          </Card>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'
import { sendMessage } from '../../services/API'
import Card from '~/components/Card/Card'
import Button from '~/components/Button/Button'
export default {
  name: 'VoiceMessageSection',
  components: {
    Card,
    Button
  },
  data() {
    return {
      charactersLimit: 500,
      termsConditionsAccepted: false,
      triedToSend: false,
      hasError: null,
      messageId: '',
      data: {
        from: '',
        text: ''
      },
      messageSent: false,
      localI18n
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      this.triedToSend = true
      if (
        this.data.from &&
        this.data.text.length &&
        this.data.text.length < this.charactersLimit
      ) {
        sendMessage({ content: this.data.text, name: this.data.from })
          .then((response) => {
            if (!response.ok) {
              throw new Error('error')
            }
          })
          .then((response) => {
            this.messageSent = true
          })
          .catch(() => {
            this.hasError = true
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/_global.scss';

.santos__container {
  margin-top: $section-margin;
  margin-bottom: $section-margin;
}
.santos {
  $max-form-size: 1160px;

  font-family: Roboto, sans-serif;
  margin-top: -$section-margin;
  margin-bottom: -$section-margin;
  grid-column: 2 / 6;

  &__headline,
  &__description {
    text-align: center;
    margin-bottom: 32px;
  }

  &__headline {
    margin-top: 91px;
  }

  &__formSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__formFooter {
    grid-column: 1 / 7;
  }

  &__submitTitle {
    font-weight: 900;
    font-size: 48px;
    text-align: center;
  }

  &__submitDescription {
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    margin-top: 34px;
    width: 100%;
  }

  &__formSectionHeadline {
    margin-bottom: 23px;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }

  &__card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }

  &__hint {
    display: block;
    width: 100%;
    color: $light-gray;
    font-size: 12px;
    margin-bottom: 12px;
    text-align: right;
  }

  &__warning {
    color: red;
    font-size: 10px;
    margin-bottom: 12px;
  }

  &__formInput {
    border-radius: 6px;
    width: 100%;
    padding: 9px 16px;
    font-size: 16px;
    margin-bottom: 16px;
    min-width: 0;
    border: 1px solid $border-grey;
    resize: none;
    font-family: inherit;
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
    margin-bottom: 42px;
  }

  @media screen and (min-width: $max-mobile-size) {
    grid-column: 2 / 14;

    &__formSection {
      padding: 62px 160px 106px 160px;
    }

    &__formFooter {
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-column: 3 / 11;
      z-index: 1;
    }

    &__schedule {
      grid-column: 5 / 9;
    }

    &__notificationCard {
      grid-column: 2 / 12;
      max-width: 100%;
      padding-top: 80px;
      padding-bottom: 80px;
    }

    &__btnGroup {
      flex-direction: row;
      justify-content: space-between;
    }

    &__submitDescription {
      font-size: 24px;
      line-height: 38px;
      margin-top: 34px;
    }
  }
}
</style>
