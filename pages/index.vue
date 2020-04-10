<template>
  <div>
    <intro-section></intro-section>
    <about-section></about-section>
    <faq-section></faq-section>
  </div>
</template>

<script>
import FaqSection from '../components/FaqSection'
import IntroSection from '~/components/IntroSection.vue'
import AboutSection from '~/components/AboutSection.vue'

export default {
  components: {
    FaqSection,
    IntroSection,
    AboutSection
  }
}
</script>
