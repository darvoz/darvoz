<template>
  <div class="container how-it-works">
    <div class="how-it-works__info">
      <h1 class="section__title how-it-works__infoTitle">
        Atende à chamada,
        <span class="how-it-works__infoTitle--strong">doa e liga famílias</span>
      </h1>
      <p class="section__description">
        Doa telemóveis ou tablets e dê o teu toque humano a todos aqueles que
        neste momento de isolamento, mais precisam de estar ligados.
      </p>
      <div class="how-it-works__infoBts">
        <Button class="how-it-works__primaryBtn" kind="primary">
          Como funciona
        </Button>
        <Button class="how-it-works__secondaryBtn" kind="secondary">
          Pontos de recolha
        </Button>
      </div>
    </div>
    <img
      class="how-it-works__background"
      src="../assets/howItWorksBG.png"
      alt="section_background"
    />
  </div>
</template>

<script>
import Button from '~/components/Button/Button.vue'

export default {
  name: 'HowItWorks',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.how-it-works {
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
      background: url('../assets/svg/howItWorksArrow.svg') no-repeat;
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
}
</style>
