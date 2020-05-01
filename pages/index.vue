<template>
  <div class="main">
    <navigation-bar
      :link-list="navLinks"
      :primary-cta="{ link: '#iniciativas', label: localI18n['nav.cta'] }"
    />
    <temporary-message :temporary-message="localI18n['nav.temporary']" />
    <intro-section :is-first-section="true" />
    <iniatives-section />
    <brands-section />
    <Footer />
    <cookie-layer />
  </div>
</template>

<script>
import localI18n from '../data/resources/i18n'
import BrandsSection from '../components/BrandsSection'
import TemporaryMessage from '../components/TemporaryMessage/TemporaryMessage'
import CookieLayer from '../components/CookieLayer/CookieLayer'
import IntroSection from '~/components/IntroSection/IndexIntroSection.vue'
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import IniativesSection from '~/components/IniativesSection/IniativesSection'
import Footer from '~/components/Footer/Footer'

export default {
  components: {
    CookieLayer,
    TemporaryMessage,
    BrandsSection,
    IntroSection,
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
          link: '/aquemnaotem',
          newPage: true
        },
        {
          name: localI18n['index.nav.bus'],
          link: '/carris',
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
