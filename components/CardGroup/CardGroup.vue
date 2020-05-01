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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 56px;
}
</style>
