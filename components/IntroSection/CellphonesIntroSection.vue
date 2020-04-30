<template>
  <GenericIntroSection
    :primary-cta="{ link: '#como-doar', label: localI18n['intro.cta.primary'] }"
    :secondary-cta="{
      link: '#pontos-recolha',
      label: localI18n['intro.cta.secondary']
    }"
  >
    <picture slot="background">
      <source
        srcset="../../assets/introSectionBG__mobile.png"
        :media="`(max-width: ${850}px)`"
      />
      <img
        src="../../assets/introSectionBG.png"
        alt="section_background"
        class="intro-section__backgroundImg"
      />
    </picture>
    <template slot="headline">
      {{ localI18n['intro.headline.normal1'] }}
      <span class="intro-section__infoTitle--strong">
        {{ localI18n['intro.headline.bold1'] }}
      </span>
      {{ localI18n['intro.headline.normal2'] }}
      <span class="intro-section__infoTitle--strong">
        {{ localI18n['intro.headline.bold2'] }}
      </span>
    </template>
    <template slot="description">
      {{ localI18n['intro.description'] }}
    </template>
  </GenericIntroSection>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'
import GenericIntroSection from './GenericIntroSection'
export default {
  name: 'IntroSection',
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

<style lang="scss" scoped>
@import '../../styles/_global.scss';

.intro-section__backgroundImg {
  width: 100%;
}
</style>
