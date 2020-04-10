<template>
  <div class="main">
    <navigation-bar></navigation-bar>
    <intro-section />
    <stats-section />
    <about-section id="o-que-e" />
    <how-to-donate-section />
    <brands-section />
    <faq-section></faq-section>
  </div>
</template>

<script>
import FaqSection from '../components/FaqSection'
import StatsSection from '../components/StatsSection'
import BrandsSection from '../components/BrandsSection'
import IntroSection from '~/components/IntroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import HowToDonateSection from '~/components/HowToDonateSection/HowToDonateSection'

export default {
  components: {
    BrandsSection,
    StatsSection,
    FaqSection,
    IntroSection,
    AboutSection,
    NavigationBar,
    HowToDonateSection
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.main {
  background: linear-gradient(180deg, $smoke-white 0%, $white 100%);
}
</style>
