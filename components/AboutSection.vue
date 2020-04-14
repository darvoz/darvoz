<template>
  <section class="container about" tabindex="0">
    <div class="about__info">
      <h1 class="section__title about__infoTitle">
        O que é o <span class="about__infoTitle__logo"><Logo /></span>
      </h1>
      <p class="section__description about__infoDescription">
        Numa altura em que o isolamento social é uma arma para o combate à
        Covid-19, muitas famílias ficaram afastadas, sem possivilidade de se
        contactarem. Muitos destes casos, simplesmente não possuem qualquer tipo
        de equipamento para o fazer ( telemóvel ou tablet ).
      </p>
      <p class="section__description about__infoDescription">
        Todos nós temos alguns equipamentos, esquecidos que já não são usados e
        que podem ser um ponto de ligação entre famílias, ajudando muitos a
        passar momentos de solidão mais acompanhados e fazendo com que o nosso
        toque humano não passe despecebido numa altura de crise.
      </p>
      <Button class="about__link" kind="tertiary">
        Saiba como doar
      </Button>
    </div>
    <img
      class="about__background"
      src="../assets/aboutBG.png"
      alt="section_background"
      role="presentation"
    />
  </section>
</template>

<script>
import Button from '~/components/Button/Button'
import Logo from '~/components/Logo/Logo'
export default {
  name: 'AboutSection',
  components: {
    Button,
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.about {
  &__info {
    grid-column: 1 / 13;
  }

  &__infoTitle {
    margin-bottom: 47px;

    &__logo {
      display: block;
      font-size: 44px;
    }
  }

  &__infoDescription {
    font-size: 16px;
    margin-bottom: 32px;
  }

  &__background {
    display: none;
  }

  @media screen and (min-width: $max-mobile-size) {
    min-height: $section-min-height;

    &__info {
      grid-column: 8 / 13;
    }

    &__background {
      display: block;
      position: absolute;
      left: -1%;
    }

    &__link {
      display: flex;
      justify-content: flex-start;
    }
  }
}
</style>
