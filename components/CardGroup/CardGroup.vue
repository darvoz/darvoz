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
@import '../../styles/_global.scss';
.card-group__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 42px;

  @media screen and (min-width: $max-mobile-size) {
    > * {
      margin: 14px;
    }
  }
}
</style>
