<template>
  <div class="main">
    <navigation-bar />
    <intro-section />
    <stats-section />
    <about-section id="o-que-e" />
    <faq-section />
  </div>
</template>

<script>
import FaqSection from '../components/FaqSection'
import IntroSection from '~/components/IntroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import StatsSection from '../components/StatsSection'

export default {
  components: {
    StatsSection,
    FaqSection,
    IntroSection,
    AboutSection,
    NavigationBar,
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.main {
  background: linear-gradient(180deg, $smoke-white 0%, $white 100%);
}
</style>
