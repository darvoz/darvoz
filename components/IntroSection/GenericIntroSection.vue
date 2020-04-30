<template>
  <section class="container intro-section" tabindex="0">
    <div class="intro-section__background">
      <slot name="background" />
    </div>
    <div class="intro-section__info">
      <h1 class="section__title intro-section__infoTitle">
        <slot name="headline" />
      </h1>
      <p class="section__description">
        <slot name="description" />
      </p>
      <div class="intro-section__infoBts">
        <Button
          v-if="primaryCta"
          class="intro-section__primaryBtn"
          kind="primary"
          link="primaryCta.link"
        >
          {{ primaryCta.label }}
        </Button>
        <Button
          v-if="secondaryCta"
          class="intro-section__secondaryBtn"
          kind="secondary"
          link="secondaryCta.link"
        >
          {{ secondaryCta.label }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'
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
    },
    primaryCta: {
      type: Object,
      default: undefined
    },
    secondaryCta: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return { localI18n }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global.scss';

.intro-section {
  &__info {
    grid-column: 2 / 6;
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
    grid-column: 2 / 6;
    width: 100%;
    max-height: 100%;
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
      grid-column: 2 / 6;
      width: calc(100% + 1rem);
    }

    &__infoTitle {
      font-size: 58px;
      text-align: left;
    }

    &__background {
      position: absolute;
      grid-column: 7 / 14;
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
