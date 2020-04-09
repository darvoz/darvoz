<template>
  <div class="container how-it-works">
    <div class="how-it-works__info">
      <h1 class="section__title how-it-works__infoTitle">
        Atende à chamada,
        <span class="how-it-works__infoTitle--strong">doa e liga famílias</span>
      </h1>
      <p class="section__description">Doa telemóveis ou tablets e dê o teu toque humano a
        todos aqueles que neste momento de isolamento, mais precisam de estar ligados.
      </p>
      <div class="how-it-works__infoBts">
        <button class="how-it-works__mainBtn">Como funciona</button>
        <button class="how-it-works__secondaryBtn">Pontos de recolha</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowItWorks'
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.how-it-works {
  background-image: url('../assets/howItWorksBG.png');
  background-repeat: no-repeat;
  background-position: right;
  height: 100vh;

  &__info {
    grid-column: 1 / 6;
  }

  &__infoTitle {
    &--strong {
      color: $primary-color;
    }

    &:after {
      content: url('../assets/svg/howItWorksArrow.svg');
      margin-left: 20%;
    }
  }
}
</style>
