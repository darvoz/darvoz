<template>
  <GenericIntroSection :is-first-section="isFirstSection" :small-text="true">
    <div slot="background" class="intro-section__background">
      <img
        src="../../assets/index/IntroBackground.svg"
        class="intro-section__background__image"
      />
      <div class="intro-section__video">
        <Video class="intro-section__videoElement" src="/intro__video.mp4" />
      </div>
    </div>
    <template slot="headline">
      <span class="intro-section__infoTitle--extra-strong">{{
        localI18n['index.intro.headline.normal1']
      }}</span>
      <span class="intro-section__infoTitle--strong">
        {{ localI18n['index.intro.headline.bold1'] }}
      </span>
    </template>
    <template slot="description">
      {{ localI18n['index.intro.description'] }}
      <br />
      {{ localI18n['index.intro.description2'] }}
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
    &--extra-strong {
      display: block;
      font-weight: 900;
      font-size: 64px;
      line-height: 80px;

      @media only screen and (min-width: $max-mobile-size) {
        font-size: 90px;
      }
    }
    &--strong {
      font-size: 42px;
      color: $primary-color;
    }
  }

  &__video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  @media only screen and (min-width: $max-mobile-size) {
    &__video {
      top: 45%;
      left: 40%;
      max-width: 800px;
      justify-content: flex-end;
      display: flex;
    }

    &__videoElement {
      width: 80%;
    }
  }
}
</style>
