<template>
  <article class="card__container">
    <slot v-if="alternate" />
    <div v-else>
      <img class="card__img" :src="img" />
      <h1 class="card__heading">{{ headline }}</h1>
      <p class="card__description">{{ description }}</p>
      <Button class="card__btn" v-if="cta" kind="primary" :link="cta.link">{{
        cta.label
      }}</Button>
    </div>
  </article>
</template>

<script>
import Button from '~/components/Button/Button'
export default {
  name: 'Card',
  components: {
    Button
  },
  props: {
    img: {
      type: String,
      required: false,
      default: null
    },
    headline: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    cta: {
      type: Object,
      required: false,
      default: null
    },
    alternate: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global.scss';

.card {
  &__container {
    background: $white;
    border: 1px solid #f2f2f2;
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    max-width: 544px;
  }

  &__img {
    max-width: 100%;
  }

  &__heading {
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 40px;
    line-height: 47px;
    color: $black;
    margin-top: 27px;
  }

  &__description {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 24px;
    line-height: 38px;
    margin-top: 16px;
    margin-bottom: 49px;
  }

  &__btn {
    width: 100%;
  }
}
</style>
