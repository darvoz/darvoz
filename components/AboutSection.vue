<template>
  <section class="container about" tabindex="0">
    <div class="about__info">
      <h1 class="section__title about__infoTitle">
        {{ localI18n['about.headline'] }}
        <span class="about__infoTitle__logo"><Logo /></span>
      </h1>
      <p class="section__description about__infoDescription">
        {{ localI18n['about.description1'] }}
      </p>
      <p class="section__description about__infoDescription">
        {{ localI18n['about.description2'] }}
      </p>
      <Button class="about__link" kind="tertiary">
        {{ localI18n['about.link'] }}
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
import * as localI18n from '../data/resources/i18n.json'
import Button from '~/components/Button/Button'
import Logo from '~/components/Logo/Logo'
export default {
  name: 'AboutSection',
  components: {
    Button,
    Logo
  },
  data() {
    return { localI18n: localI18n.default }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.about {
  height: 100vh;

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
