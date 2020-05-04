<template>
  <div class="main">
    <navigation-bar
      :link-list="navLinks"
      :primary-cta="{ link: '#iniciativas', label: localI18n['nav.cta'] }"
    />
    <intro-section :is-first-section="true" />
    <initiatives-section />
    <brands-section />
    <Footer />
    <cookie-layer />
  </div>
</template>

<script>
import localI18n from '../data/resources/i18n'
import BrandsSection from '../components/BrandsSection'
import CookieLayer from '../components/CookieLayer/CookieLayer'
import IntroSection from '~/components/IntroSection/IndexIntroSection.vue'
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import InitiativesSection from '~/components/InitiativesSection/InitiativesSection'
import Footer from '~/components/Footer/Footer'

export default {
  components: {
    CookieLayer,
    BrandsSection,
    IntroSection,
    NavigationBar,
    InitiativesSection,
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
          link: '/doar-telemoveis-tablets',
          newPage: true
        },
        {
          name: localI18n['index.nav.bus'],
          link: '/carris-mensagens-gratis',
          newPage: true
        }
      ]
    }
  },
  head() {
    return {
      title:
        '#darvoz - Doe telemóveis e tablets que não necessita e dê voz a quem precisa',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A missão do "darvoz é permitir que todos possam comunicar com os seus familiares e amigos. O #darvoz é um movimento que ajudará as família e amigos estarem ligados.'
        }
      ]
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
