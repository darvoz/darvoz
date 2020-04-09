<template>
  <div class="main">
    <navigation-bar></navigation-bar>
    <intro-section />
    <about-section id="o-que-e" />
    <how-to-donate />
    <faq-section></faq-section>
  </div>
</template>

<script>
import FaqSection from '../components/FaqSection'
import IntroSection from '~/components/IntroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import HowToDonate from '~/components/HowToDonate/HowToDonate'

export default {
  components: {
    FaqSection,
    IntroSection,
    AboutSection,
    NavigationBar,
    HowToDonate
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.main {
  background: linear-gradient(180deg, $smoke-white 0%, $white 100%);
}
</style>
