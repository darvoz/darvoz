<template>
  <GenericIntroSection
    :is-first-section="isFirstSection"
    class="santos-intro__info"
    :primary-cta="{
      link: '#quadra',
      label: localI18n['darvoz-santos.intro.cta']
    }"
  >
    <div slot="background" class="santos-intro__imageWrapper">
      <picture slot="background">
        <source
          srcset="../../assets/santos/santos__introBackground_2x.png"
          :media="`(min-width: ${850}px)`"
        />
        <img
          src="../../assets/santos/santos__introBackground.png"
          alt="section_background"
          class="intro-section__backgroundImg santos-intro__backgroundImg"
        />
      </picture>
    </div>
    <template slot="headline">
      {{ localI18n['darvoz-santos.intro.headline.normal'] }}
      <span class="intro-section__infoTitle--strong">
        {{ localI18n['darvoz-santos.intro.headline.strong'] }}
      </span>
    </template>
    <template slot="description">
      {{ localI18n['darvoz-santos.intro.description'] }}
    </template>
  </GenericIntroSection>
</template>

<script>
import localI18n from '../../data/resources/i18n'
import GenericIntroSection from './GenericIntroSection'

export default {
  name: 'SantosIntroSection',
  components: {
    GenericIntroSection
  },
  props: {
    isFirstSection: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return { localI18n }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/_global.scss';

.santos-intro {
  &__info {
    background-color: $carris-yellow;
  }

  &__imageWrapper {
    display: flex;
    justify-content: center;
  }

  &__backgroundImg {
    object-fit: contain;
    width: 100%;
    max-width: 100%;
    height: 400px;
  }

  @media only screen and (min-width: $max-mobile-size) {
    &__backgroundImg {
      width: 669px;
      height: 610px;
    }

    &__imageWrapper {
      justify-content: flex-end;
    }
  }
}
</style>
