<template>
  <section class="container intro-section">
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
        Atende à chamada,
        <span class="intro-section__infoTitle--strong">
          doa e liga famílias
        </span>
      </h1>
      <p class="section__description">
        Doa telemóveis ou tablets e dê o teu toque humano a todos aqueles que
        neste momento de isolamento, mais precisam de estar ligados.
      </p>
      <div class="intro-section__infoBts">
        <Button class="intro-section__primaryBtn" kind="primary">
          Como funciona
        </Button>
        <Button class="intro-section__secondaryBtn" kind="secondary">
          Pontos de recolha
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.intro-section {
  @include container-column;

  min-height: $section-min-height;

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
