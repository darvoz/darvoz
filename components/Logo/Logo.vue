<template>
  <img
    src="../../assets/svg/Logo.svg"
    alt="#darvoz logo"
    class="logo"
    :height="height"
  />
</template>

<script>
export default {
  name: 'Logo',
  props: {
    height: {
      type: Number,
      default: 48
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/_global';

.logo {
  margin-top: -10px; //Offset to center svg text with button
}
</style>
