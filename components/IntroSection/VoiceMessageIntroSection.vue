<template>
  <GenericIntroSection
    :primary-cta="{
      link: '#mensagem',
      label: localI18n['darvoz-carris.intro.cta']
    }"
    :is-first-section="isFirstSection"
    class="voice-message-intro__info"
  >
    <div slot="background" class="voice-message-intro__imageWrapper">
      <img
        src="../../assets/voice-message/voice-message__introBackground.jpg"
        alt="section_background"
        class="intro-section__backgroundImg voice-message-intro__backgroundImg"
      />
    </div>
    <template slot="headline">
      {{ localI18n['darvoz-carris.intro.headline.normal'] }}
      <span class="intro-section__infoTitle--strong">
        {{ localI18n['darvoz-carris.intro.headline.strong'] }}
      </span>
    </template>
    <template slot="description">
      {{ localI18n['darvoz-carris.intro.description'] }}
    </template>
  </GenericIntroSection>
</template>

<script>
import localI18n from '../../data/resources/i18n'
import GenericIntroSection from './GenericIntroSection'

export default {
  name: 'VoiceMessageIntroSection',
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

.voice-message-intro {
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
    height: 400px;
  }

  @media only screen and (min-width: $max-mobile-size) {
    &__backgroundImg {
      width: 463px;
      height: 463px;
    }

    &__imageWrapper {
      justify-content: flex-end;
    }
  }
}
</style>
