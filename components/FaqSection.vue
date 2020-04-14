<template>
  <section v-if="faqList" class="container" tabindex="0" id="perguntas-frequentes">
    <div class="faq-section">
      <div class="faq-section__title">
        <div class="faq-section__titleText">
          <h1 class="section__title">
            {{ localI18n['faq.headline'] }}
          </h1>
        </div>
      </div>
      <accordion
        v-for="item in faqList"
        :key="item.title"
        :title="item.title"
        class="faq-section__item"
      >
        {{ item.answer }}
      </accordion>
    </div>
  </section>
</template>

<script>
import * as localI18n from '../data/resources/i18n.json'
import Accordion from '~/components/Accordion/Accordion.vue'
import Button from '~/components/Button/Button.vue'

export default {
  name: 'FaqSection',
  components: {
    Accordion,
    Button
  },
  data() {
    return {
      localI18n: localI18n.default,
      faqList: null
    }
  },
  async created() {
    const faqListJSON = () =>
      import('~/data/resources/faqList.json').then((m) => {
        return m.default.faqList || m.faqList
      })

    this.faqList = await faqListJSON()
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.faq-section {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  grid-column: 1 / 13;

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;
  }

  &__titleImg {
    margin-bottom: 40px;
  }

  &__titleText {
    text-align: center;
  }

  &__item {
    margin-bottom: 8px;
    width: 100%;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .section__title {
    font-weight: 900;
    font-size: 52px;
    line-height: 65px;
  }

  @media only screen and (min-width: $max-mobile-size) {
    &__title {
      flex-direction: row;
      margin-bottom: 64px;
    }

    &__titleImg {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
}
</style>
