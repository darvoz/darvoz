<template>
  <div class="main">
    <navigation-bar
      :link-list="navLinks"
      :primary-cta="{ link: '#mensagem', label: 'Gravar mensagem' }"
    />
    <voice-message-intro-section :is-first-section="true" />
    <!--<text-element
      :title="localI18n['voice-message.title']"
      :description="localI18n['voice-message.description']"
    /> -->
    <voice-message-section />
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
import VoiceMessageIntroSection from '../components/IntroSection/VoiceMessageIntroSection'
import VoiceMessageSection from '../components/VoiceMessageSection/VoiceMessageSection'
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
    VoiceMessageSection,
    VoiceMessageIntroSection,
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
        }
      ],
      faqList: null,
      tempMessage:
        'Informamos que por motivos técnicos, a CARRIS terá de adiar para amanhã (7 de maio), a entrega de parte das mensagens que estavam programadas para hoje.\n' +
        'Agradecemos a compreensão e fica aqui o nosso compromisso que tudo faremos para garantir a entrega amanhã, nos mesmos horários que estavam previstos para hoje.'
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
      title: 'Entrega grátis de mensagens pela Carris',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'É simples! Grave a sua mensagem e a CARRIS vai levar a sua mensagem de força e saudade! É simples, gratuito e rápido. Grave agora a sua mensagem!'
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
