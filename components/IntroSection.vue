<template>
  <section class="container intro-section" :style="'margin-top:' + margin">
    <picture class="intro-section__background">
      <source
        srcset="../assets/introSectionBG__mobile.png"
        :media="`(max-width: ${850}px)`"
      />
      <img
        src="../assets/introSectionBG.png"
        alt="section_background"
        class="intro-section__backgroundImg"
      />
    </picture>
    <div class="intro-section__info">
      <h1 class="section__title intro-section__infoTitle">
        {{ localI18n['intro.headline.normal'] }}
        <span class="intro-section__infoTitle--strong">
          {{ localI18n['intro.headline.bold'] }}
        </span>
      </h1>
      <p class="section__description">
        {{ localI18n['intro.description'] }}
      </p>
      <div class="intro-section__infoBts">
        <Button class="intro-section__primaryBtn" kind="primary">
          {{ localI18n['intro.cta.primary'] }}
        </Button>
        <Button class="intro-section__secondaryBtn" kind="secondary">
          {{ localI18n['intro.cta.secondary'] }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
import * as localI18n from '../data/resources/i18n.json'
import Button from '~/components/Button/Button.vue'

export default {
  name: 'IntroSection',
  components: {
    Button
  },
  props: {
    margin: {
      type: String,
      required: true
    }
  },
  data() {
    return { localI18n: localI18n.default }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.intro-section {
  @include container-column;

  min-height: 100vh;

  &__info {
    grid-column: 1 / 6;
  }

  &__infoTitle {
    &--strong {
      color: $primary-color;
    }

    &:after {
      content: '';
      background: url('../assets/svg/introSectionArrow.svg') no-repeat;
      margin: -26px 0 0 13%;
      display: block;
      height: 68px;
    }
  }

  &__infoBts {
    display: flex;
    margin-top: 32px;
  }

  &__primaryBtn {
    margin-right: 16px;
  }

  &__background {
    position: absolute;
    grid-column: 5 / 13;
    width: 100%;
  }

  &__backgroundImg {
    width: 100%;
  }

  @media only screen and (max-width: $max-mobile-size) {
    display: flex;
    flex-direction: column;

    &__info {
      grid-column: 1 / 5;
      text-align: center;
    }

    &__background {
      position: relative;
      min-height: 20vh;
      grid-column: 1 / 5;
      width: 100%;
      max-height: 500px;
      max-width: 500px;
      object-fit: contain;
      justify-self: center;
    }

    &__infoTitle {
      &:after {
        content: '';
        margin: -20px auto 5px auto;
        width: 218px; //Arrow size
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    &__infoBts {
      display: flex;
      flex-direction: column;
    }

    &__primaryBtn {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
}
</style>
