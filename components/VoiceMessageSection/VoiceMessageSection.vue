<template>
  <section
    id="mensagem"
    class="container voice-message__container"
    tabindex="0"
  >
    <div class="content">
      <div class="voice-message">
        <form class="voice-message__formSection">
          <Card
            class="voice-message__card voice-message__notificationCard"
            :alternate="true"
          >
            <h2 class="voice-message__submitTitle">
              {{ localI18n['voice-message.initiativeOverTitle'] }}
            </h2>
            <p class="voice-message__submitDescription">
              {{ localI18n['voice-message.initiativeOverDescription'] }}
            </p>
          </Card>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'
import Card from '~/components/Card/Card'
export default {
  name: 'VoiceMessageSection',
  components: {
    Card
  },
  data() {
    return {
      localI18n
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/_global.scss';

.voice-message__container {
  margin-top: $section-margin;
  margin-bottom: $section-margin;

  &:before {
    content: '';
    background: url('../../assets/svg/voice-message-bg.svg') no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    user-select: none;
  }
}
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

  &__submitTitle {
    font-weight: 900;
    font-size: 48px;
    text-align: center;
    color: $primary-color;
  }

  &__submitDescription {
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    margin-top: 34px;
    width: 100%;
  }

  &__card.voice-message__card {
    width: 100%;
    height: 100%;
    padding: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }

  @media screen and (min-width: $max-mobile-size) {
    grid-column: 1 / 16;

    &__formSection {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 24px;
      padding: 94px 160px 106px 160px;
    }

    &__formCard {
      grid-column: 7 / 12;
      margin-top: 0;
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

    &__submitDescription {
      font-size: 24px;
      line-height: 38px;
      margin-top: 34px;
    }
  }
}
</style>
