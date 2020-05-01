<template>
  <section
    v-if="faqList"
    id="perguntas-frequentes"
    class="container"
    tabindex="0"
  >
    <div class="faq-section">
      <div class="faq-section__title">
        <div class="faq-section__titleText">
          <h1 class="section__title">
            {{ title}}
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
import localI18n from '../data/resources/i18n.json'
import Accordion from '~/components/Accordion/Accordion.vue'

export default {
  name: 'FaqSection',
  components: {
    Accordion
  },
  props: {
    title: {
      type: String,
      required: true
    },
    faqList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localI18n
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.faq-section {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  grid-column: 2 / 6;

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
    grid-column: 5 / 12;

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
