<template>
  <article class="panel-item">
    <img class="panel-item__img" :src="imageSrc" :alt="imageAlt" role="presentation" />
    <h3 class="panel-item__title">
      <slot name="panel-title" />
    </h3>
    <p class="panel-item__description">
      <slot name="panel-description" />
    </p>
  </article>
</template>

<script>
export default {
  name: 'PanelItem',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
