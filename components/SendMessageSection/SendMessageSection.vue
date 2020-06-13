<template>
  <section id="quadra" class="container santos__container" tabindex="0">
    <div class="content">
      <div class="santos">
        <Card
          class="santos__card santos__notificationCard"
          :alternate="true"
          :full="true"
        >
          <h2 class="santos__submitTitle">
            {{ localI18n['darvoz-santos.initiativeOverTitle'] }}
          </h2>
          <p class="santos__submitDescription">
            {{ localI18n['darvoz-santos.initiativeOverDescription.1'] }}
          </p>
          <p class="santos__submitDescription">
            {{ localI18n['darvoz-santos.initiativeOverDescription.2'] }}
          </p>
          <p class="santos__submitDescription">
            {{ localI18n['darvoz-santos.initiativeOverDescription.3'] }}
          </p>
          <div class="santos__submitCTA">
            <Button
              kind="secondary"
              target="_blank"
              link="https://www.carris.pt/descubra/noticias/darvozcarrislisboaemfesta/"
              >{{ localI18n['darvoz-santos.iniativeOverCTA'] }}</Button
            >
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'
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
      localI18n
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
    text-align: justify;
    text-justify: inter-word;
  }

  &__submitCTA {
    margin-top: 16px;
  }
  &__card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }

  @media screen and (min-width: $max-mobile-size) {
    grid-column: 2 / 14;

    &__notificationCard {
      grid-column: 2 / 12;
      max-width: 100%;
      padding-top: 80px;
      padding-bottom: 80px;
    }

    &__submitDescription {
      font-size: 24px;
      line-height: 38px;
      margin-top: 34px;
    }
  }
}
</style>
