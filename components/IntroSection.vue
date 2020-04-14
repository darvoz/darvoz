<template>
  <section class="container intro-section" tabindex="0">
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
        {{ localI18n['intro.headline.normal1'] }}
        <span class="intro-section__infoTitle--strong">
          {{ localI18n['intro.headline.bold1'] }}
        </span>
        {{ localI18n['intro.headline.normal2'] }}
        <span class="intro-section__infoTitle--strong">
          {{ localI18n['intro.headline.bold2'] }}
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
    isFirstSection: {
      type: Boolean,
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

  padding-bottom: 40px;

  &__info {
    grid-column: 1 / 5;
    text-align: center;
  }

  &__infoTitle {
    font-weight: 900;
    font-size: 44px;
    line-height: 110%;
    text-align: center;
    margin-bottom: 32px;

    &--strong {
      color: $primary-color;
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
    position: relative;
    grid-column: 1 / 5;
    width: 100%;
    max-height: 500px;
    max-width: 500px;
    object-fit: contain;
    justify-self: center;
  }

  &__backgroundImg {
    width: 100%;
  }

  @media only screen and (min-width: $max-mobile-size) {
    min-height: $section-min-height;

    &__info {
      grid-column: 1 / 5;
      width: calc(100% + 1rem);
    }

    &__infoTitle {
      font-size: 58px;
      text-align: left;
    }

    &__background {
      position: absolute;
      grid-column: 5 / 13;
      padding-left: $grid-gap;
      width: 100%;
      max-width: unset;
      max-height: unset;
    }
  }

  @media only screen and (max-width: 1420px) {
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
