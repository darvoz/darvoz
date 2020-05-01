<template>
  <div class="main">
    <navigation-bar
      :link-list="navLinks"
      :primary-cta="{ link: '#pontos-recolha', label: 'Quero Doar' }"
    />
    <temporary-message :temporary-message="localI18n['nav.temporary']" />
    <intro-section :is-first-section="true" />
    <stats-section />
    <about-section id="o-que-e" />
    <iniatives-section />
    <brands-section />
    <Footer />
  </div>
</template>

<script>
import localI18n from '../data/resources/i18n'
import StatsSection from '../components/StatsSection'
import BrandsSection from '../components/BrandsSection'
import TemporaryMessage from '../components/TemporaryMessage/TemporaryMessage'
import IntroSection from '~/components/IntroSection/IndexIntroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import IniativesSection from '~/components/IniativesSection/IniativesSection'
import Footer from '~/components/Footer/Footer'

export default {
  components: {
    TemporaryMessage,
    BrandsSection,
    StatsSection,
    IntroSection,
    AboutSection,
    NavigationBar,
    IniativesSection,
    Footer
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
          link: '/darvozcarris',
          newPage: true
        }
      ]
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
