<template>
  <div class="main">
    <navigation-bar />
    <how-it-works />
    <about id="o-que-e" />
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import HowItWorks from '~/components/HowItWorks'
import About from '~/components/About'

export default {
  components: {
    NavigationBar,
    HowItWorks,
    About
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';
.main {
  background-color: $smoke-white;
}
</style>
