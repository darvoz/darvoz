<template>
  <section class="container intro-section" tabindex="0">
    <img
      class="intro-section__backgroundMobile"
      src="../assets/introSectionBG__mobile.png"
      alt="section_background"
    />
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
    <img
      class="intro-section__background"
      src="../assets/introSectionBG.png"
      alt="section_background"
    />
  </section>
</template>

<script>
import Button from '~/components/Button/Button.vue'

export default {
  name: 'IntroSection',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.intro-section {
  @include container-column;

  height: 100vh;

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
    right: -7%;
  }

  &__backgroundMobile {
    display: none;
  }

  @media only screen and (max-width: $max-mobile-size) {
    display: flex;
    flex-direction: column-reverse;

    &__info {
      grid-column: 1 / 5;
    }

    &__background {
      display: none;
    }

    &__backgroundMobile {
      display: block;
      grid-column: 1 / 5;
      width: 100%;
      max-height: 500px;
      max-width: 500px;
      object-fit: contain;
      justify-self: center;
    }
  }
}
</style>
