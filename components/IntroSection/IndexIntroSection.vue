<template>
  <GenericIntroSection :is-first-section="isFirstSection" :small-text="true">
    <div slot="background" class="index-section__background">
      <img
        src="../../assets/index/IntroBackground.svg"
        class="index-section__background__image"
      />
      <div class="index-section__video">
        <iframe
          class="index-section__videoElement"
          src="https://player.vimeo.com/video/414109754"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <template slot="headline">
      <span class="index-section__infoTitle--extra-strong">{{
        localI18n['index.intro.headline.normal1']
      }}</span>
      <span class="index-section__infoTitle--strong">
        {{ localI18n['index.intro.headline.bold1'] }}
      </span>
    </template>
    <template slot="description">
      {{ localI18n['index.intro.description1'] }}
      <br />
      {{ localI18n['index.intro.description2'] }}
      <br />
      {{ localI18n['index.intro.description3'] }}
    </template>
  </GenericIntroSection>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'
import GenericIntroSection from './GenericIntroSection'
// import Video from '~/components/Video/Video'
export default {
  name: 'IntroSection',
  components: {
    GenericIntroSection
    // Video
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

.index-section {
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
    height: 60%;
  }

  &__videoElement {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  @media only screen and (min-width: $max-mobile-size) {
    &__video {
      top: 45%;
      left: 40%;
      max-width: 800px;
      justify-content: flex-end;
      display: flex;
      width: 100%;
      height: 60%;
    }

    &__videoElement {
      width: 80%;
    }
  }
}
</style>
