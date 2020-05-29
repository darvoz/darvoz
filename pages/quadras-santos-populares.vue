<template>
  <div class="main">
    <navigation-bar
      :link-list="navLinks"
      :primary-cta="{
        link: '#quadra',
        label: localI18n['darvoz-santos.intro.cta']
      }"
    />
    <santos-intro-section :is-first-section="true" />
    <send-message-section />
    <section-separator />
    <faq-section
      v-if="faqList"
      :title="localI18n['faq.headline']"
      :faq-list="faqList"
    ></faq-section>
    <Footer />
    <CookieLayer />
  </div>
</template>

<script>
import localI18n from '../data/resources/i18n'
import SantosIntroSection from '../components/IntroSection/SantosIntroSection'
import SendMessageSection from '../components/SendMessageSection/SendMessageSection'
import FaqSection from '../components/FaqSection'
import SectionSeparator from '../components/SectionSeparator/SectionSeparator'
import CookieLayer from '../components/CookieLayer/CookieLayer'
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import Footer from '~/components/Footer/Footer'

export default {
  components: {
    CookieLayer,
    SectionSeparator,
    FaqSection,
    SendMessageSection,
    SantosIntroSection,
    NavigationBar,
    Footer
  },
  data() {
    return {
      localI18n,
      navLinks: [
        {
          name: localI18n['nav.home'],
          link: '/',
          newPage: true
        },
        {
          name: localI18n['index.nav.cellphones'],
          link: '/doar-telemoveis-tablets',
          newPage: true
        },
        {
          name: localI18n['index.nav.santos'],
          link: '/quadras-santos-populares',
          newPage: true,
          active: true
        }
      ],
      faqList: null
    }
  },
  async created() {
    const faqListJSON = () =>
      import('~/data/resources/faqListCarris.json').then((m) => {
        return m.default.faqList || m.faqList
      })

    this.faqList = await faqListJSON()
  },
  head() {
    return {
      title: 'Quadras Santos Populares',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'É simples! Grave a sua mensagem e a CARRIS vai levar a sua mensagem de força e saudade! É simples, gratuito e rápido. Grave agora a sua mensagem!' // TODO
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
