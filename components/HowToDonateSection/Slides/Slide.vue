<template>
  <section class="slide" tabindex="0">
    <div class="slide__background">
      <slot name="background" />
    </div>
    <div class="slide__info">
      <div class="section__title slide__infoTitle"><slot name="title" /></div>
      <div class="section__description slide__infoDescription">
        <slot name="description" />
      </div>
      <div class="section__description slide__infoNotes">
        <slot name="notes" />
      </div>
      <Button
        v-if="link"
        class="slide__infoLink"
        :link="link.href"
        kind="tertiary"
        >{{ link.text }}</Button
      >
    </div>
  </section>
</template>

<script>
import Button from '~/components/Button/Button'
export default {
  name: 'Slide',
  components: {
    Button
  },
  props: {
    link: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/_global.scss';

.slide {
  @include container-gap();

  display: grid;
  text-align: left;
  padding-bottom: 30px;

  &__background {
    max-width: 100%;
    grid-column: 1 / 13;
    height: 30vh;
    object-fit: contain;
    display: flex;
    justify-content: center;


    @media screen and (min-width: $max-mobile-size) {
      grid-column: 1 / 7;
      height: auto;
    }
  }

  &__info {
    font-family: Roboto, sans-serif;
    grid-column: 1 / 13;
    margin-top: 10px;

    @media screen and (min-width: $max-mobile-size) {
      grid-column: 8 / 13;
    }
  }

  &__infoTitle {
    font-family: Muli, sans-serif;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    color: $primary-color;
  }

  &__infoDescription {
    font-size: 24px;
    line-height: 38px;
    color: $black;
    margin-top: 24px;
  }

  &__infoNotes {
    font-size: 16px;
    line-height: 30px;
    color: $gray;
    margin-top: 24px;
  }

  &__infoLink {
    width: max-content;
  }
}
</style>
