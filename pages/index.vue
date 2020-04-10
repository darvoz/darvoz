<template>
  <div>
    <how-it-works></how-it-works>
    <about></about>
    <faq-section></faq-section>
  </div>
</template>

<script>
import FaqSection from '../components/FaqSection'
import HowItWorks from '~/components/HowItWorks.vue'
import About from '~/components/About.vue'

export default {
  components: {
    FaqSection,
    HowItWorks,
    About
  }
}
</script>
