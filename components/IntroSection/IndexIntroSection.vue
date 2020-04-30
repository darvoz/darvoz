<template>
  <GenericIntroSection>
    <div slot="background" class="intro-section__background">
      <img
        src="../../assets/index/IntroBackground.svg"
        class="intro-section__background__image"
      />
      <div class="intro-section__video">
        <Video
          src="https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm"
        />
      </div>
    </div>
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
import Video from '~/components/Video/Video'
export default {
  name: 'IntroSection',
  components: {
    GenericIntroSection,
    Video
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

.intro-section {
  &__background {
    position: relative;
    &__image {
      max-width: max-content;
      width: 100%;
    }
  }
  &__infoTitle {
    &--strong {
      color: $primary-color;
    }
  }

  &__video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    @media only screen and (min-width: $max-mobile-size) {
      max-width: 80%;
    }
  }
}
</style>
