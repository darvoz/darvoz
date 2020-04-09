<template>
  <div>
    <Button>Primary Button</Button>
    <Button kind="secondary">Secondary Button</Button>
    <Button link="www.google.com" kind="secondary">Secondary Button</Button>
    <Button kind="tertiary">Simple Link</Button>
    <Button link="www.google.com">Simple Link</Button>
  </div>
</template>

<script>
import Button from '~/components/Button/Button.vue'
export default {
  components: {
    Button
  }
}
</script>

<style lang="scss">
@import '../styles/_global';
</style>
