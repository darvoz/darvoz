<template>
  <div class="main">
    <navigation-bar :link-list="navLinks" />
    <temporary-message :temporary-message="localI18n['nav.temporary']" :primary-cta="{link: '#pontos-recolha', label: 'Quero Doar'}"/>
    <intro-section :is-first-section="true" />
    <stats-section />
    <about-section id="o-que-e" :links="navLinks" />
    <how-to-donate-section />
    <collecting-stations-section id="pontos-recolha" />
    <brands-section />
    <section-separator />
    <faq-section v-if="faqList" :title="localI18n['faq.headline']" :faq-list="faqList"></faq-section>
  </div>
</template>

<script>
import localI18n from '../data/resources/i18n'
import FaqSection from '../components/FaqSection'
import StatsSection from '../components/StatsSection'
import BrandsSection from '../components/BrandsSection'
import SectionSeparator from '../components/SectionSeparator/SectionSeparator'
import TemporaryMessage from '../components/TemporaryMessage/TemporaryMessage'
import IntroSection from '~/components/IntroSection/CellphonesIntroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import NavigationBar from '~/components/NavigationBar/NavigationBar'
import HowToDonateSection from '~/components/HowToDonateSection/HowToDonateSection'
import CollectingStationsSection from '~/components/CollectingStationsSection/CollectingStationsSection'

export default {
  components: {
    TemporaryMessage,
    SectionSeparator,
    BrandsSection,
    StatsSection,
    FaqSection,
    IntroSection,
    AboutSection,
    NavigationBar,
    CollectingStationsSection,
    HowToDonateSection
  },
  data() {
    return {
      localI18n,
      navLinks: [
        {
          name: localI18n['nav.about'],
          link: '#o-que-e'
        },
        {
          name: localI18n['nav.how-to-donate'],
          link: '#como-doar'
        },
        {
          name: localI18n['nav.collecting-stations'],
          link: '#pontos-recolha'
        },
        {
          name: localI18n['nav.faq'],
          link: '#perguntas-frequentes'
        }
      ],
      faqList: null,
    }
  },
  async created() {
    const faqListJSON = () =>
      import('~/data/resources/faqList.json').then((m) => {
        return m.default.faqList || m.faqList
      })

    this.faqList = await faqListJSON()
  },
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
