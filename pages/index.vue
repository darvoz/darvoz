<template>
  <div class="main">
    <navigation-bar />
    <how-it-works />
    <about id="o-que-e" />
    <faq-section></faq-section>
  </div>
</template>

<script>
import FaqSection from '../components/FaqSection'
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import HowItWorks from '~/components/HowItWorks.vue'
import About from '~/components/About.vue'

export default {
  components: {
    FaqSection,
    NavigationBar,
    HowItWorks,
    About
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.main {
  background: linear-gradient(180deg, $smoke-white 0%, $white 100%);
}
</style>
