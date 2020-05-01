<template>
  <section class="text__info">
    <h1 class="section__title text__title">
      {{ title }}
    </h1>
    <p class="section__description text__description">
      {{ description }}
    </p>
    <Button
      v-if="primaryCta"
      class="text__button"
      kind="primary"
      @click="$emit('click')"
    >
      {{ primaryCta.label }}
    </Button>
  </section>
</template>

<script>
import Button from '../Button/Button'
export default {
  name: 'TextElement',
  components: { Button },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    primaryCta: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/_global.scss';
.text {
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    padding: 50px;
  }

  &__description {
    margin-top: 32px;
    font-size: 16px;
    color: $gray;
    text-align: center;
  }

  &__title {
    text-align: center;
  }

  &__button {
    margin-top: 62px;
  }

  @media only screen and (min-width: $max-mobile-size) {
    &__info {
      padding: 100px 200px;
    }
  }
}
</style>
