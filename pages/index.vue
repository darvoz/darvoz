<template>
  <div class="main">
    <navigation-bar :link-list="navLinks" :cta="navCta" />
    <temporary-message :temporary-message="localI18n['nav.temporary']" />
    <intro-section :is-first-section="true" />
    <voice-message-section />
    <stats-section />
    <about-section id="o-que-e" />
    <iniatives-section />
    <brands-section />
    <section-separator />
    <faq-section></faq-section>
  </div>
</template>

<script>
import localI18n from '../data/resources/i18n'
import FaqSection from '../components/FaqSection'
import StatsSection from '../components/StatsSection'
import BrandsSection from '../components/BrandsSection'
import SectionSeparator from '../components/SectionSeparator/SectionSeparator'
import TemporaryMessage from '../components/TemporaryMessage/TemporaryMessage'
import VoiceMessageSection from '../components/VoiceMessageSection/VoiceMessageSection'
import IntroSection from '~/components/IntroSection/IndexIntroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import IniativesSection from '~/components/IniativesSection/IniativesSection'

export default {
  components: {
    VoiceMessageSection,
    TemporaryMessage,
    SectionSeparator,
    BrandsSection,
    StatsSection,
    FaqSection,
    IntroSection,
    AboutSection,
    NavigationBar,
    IniativesSection
  },
  data() {
    return {
      localI18n,
      navLinks: [
        {
          name: localI18n['nav.home'],
          link: '/',
          active: true,
          newPage: true
        },
        {
          name: localI18n['index.nav.cellphones'],
          link: '/telemoveis',
          newPage: true
        },
        {
          name: localI18n['index.nav.bus'],
          link: '/autocarro',
          newPage: true
        }
      ],
      navCta: { link: '#iniciativas', label: localI18n['index.nav.cta'] }
    }
  },
  mounted() {
    if (!window.MediaRecorder) {
      import('audio-recorder-polyfill').then(
        (AudioRecorder) => (window.MediaRecorder = AudioRecorder.default)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.main {
  background: $white;
  padding-top: $nav-height;

  overflow-x: hidden; //Hide overflow created by the svg arrows
}
</style>
