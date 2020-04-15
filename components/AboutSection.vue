<template>
  <section class="container about" tabindex="0">
    <div class="about__info">
      <h1 class="section__title about__infoTitle">
        {{ localI18n['about.headline'] }} <Logo class="about__infoTitleIcon" />
      </h1>
      <p class="section__description about__infoDescription">
        {{ localI18n['about.description1'] }}
      </p>
      <p class="section__description about__infoDescription">
        {{ localI18n['about.description2'] }}
      </p>
    </div>
    <div class="about__background">
      <img
        class="about__backgroundImg"
        src="../assets/aboutBG.png"
        alt="section_background"
        role="presentation"
      />
    </div>
  </section>
</template>

<script>
import * as localI18n from '../data/resources/i18n.json'
import Logo from './Logo/Logo.vue'

export default {
  name: 'AboutSection',
  components: {
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
  &__info {
    grid-column: 1 / 13;
  }

  &__infoTitle {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 47px;
    font-weight: 900;
    font-size: 38px;
    line-height: 48px;

    &--strong {
      font-size: 44px;
      line-height: 84%;
    }

    &--blue {
      color: $primary-color;
    }
  }

  &__infoTitleIcon {
    margin-left: 10px;
  }

  &__infoDescription {
    position: relative;
    z-index: 10;
    font-weight: normal;
    font-size: 16px;
    line-height: 190%;
    color: $black;
    text-align: left;
    background-color: $smoke-white;

    &:first-of-type {
      margin-bottom: 32px;
    }
  }

  &__background {
    display: none;
  }

  @media screen and (min-width: $max-mobile-size) {
    min-height: $section-min-height;

    &__info {
      grid-column: 7 / 13;
    }

    &__infoTitle {
      font-size: 52px;
      line-height: 65px;
    }

    &__infoTitleIcon {
      width: 220px;
      height: 66px;
    }

    &__background {
      position: relative;
      display: flex;
      grid-column: 1 / 7;
      align-items: center;
      height: 100%;
      &:after {
        content: '';
        background: url('../assets/svg/about-line-out.svg') no-repeat;
        width: 200%;
        height: 228px;
        position: absolute;
        bottom: 5%;
        left: 60%;
      }
    }

    &__backgroundImg {
      width: 100%;
    }
  }
}
</style>
