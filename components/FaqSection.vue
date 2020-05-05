<template>
  <section
    v-if="faqList"
    id="perguntas-frequentes"
    class="container"
    tabindex="0"
  >
    <div class="content">
      <div class="faq-section">
        <div class="faq-section__title">
          <div class="faq-section__titleText">
            <h1 class="section__title">
              {{ title }}
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
          <Button
            v-if="item.link"
            :link="item.link.url"
            target="_blank"
            kind="tertiary"
            class="faq-section__item__cta"
          >
            {{ item.link.label }}
          </Button>
        </accordion>
      </div>
    </div>
  </section>
</template>

<script>
import localI18n from '../data/resources/i18n.json'
import Accordion from '~/components/Accordion/Accordion.vue'
import Button from '~/components/Button/Button'

export default {
  name: 'FaqSection',
  components: {
    Accordion,
    Button
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

    &__cta {
      margin-top: 24px;
    }

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
    grid-column: 4 / 12;

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
