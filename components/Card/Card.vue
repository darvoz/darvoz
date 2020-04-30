<template>
  <article class="card__container">
    <img class="card__img" :src="img" />
    <h1 class="card__heading">{{ headline }}</h1>
    <p class="card__description">{{ description }}</p>
    <Button kind="primary" :link="cta.link">{{ cta.label }}</Button>
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
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    cta: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__container {
    background: #ffffff;
    border: 1px solid #f2f2f2;
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 544px;
    margin-top: 56px;
  }

  &__img {
    max-width: 100%;
  }

  &__heading {
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 40px;
    line-height: 47px;
    color: #000000;
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
}
</style>
