<template>
  <div class="card-group__container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardGroup'
}
</script>

<style lang="scss" scoped>
.card-group__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
</style>
