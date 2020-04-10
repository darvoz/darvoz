<template>
  <section v-if="faqList" class="container faq-section" tabindex="0">
    <div class="faq-section__title">
      <img
        src="../assets/svg/hashtag.svg"
        alt="title_hashtag"
        role="presentation"
        class="faq-section__titleImg"
      />
      <div class="faq-section__titleText">
        <h1 class="section__title">Perguntas</h1>
        <h1 class="section__title">frequentes</h1>
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
    <Button class="faq-section__link" kind="tertiary">
      Ler mais perguntas
    </Button>
  </section>
</template>

<script>
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
      faqList: null
    }
  },
  created() {
    fetch('resources/faqList.json')
      .then((data) => data.json())
      .then((response) => (this.faqList = response.faqList))
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.faq-section {
  display: flex;
  flex-direction: column;
  min-height: 80vh;

  &__title {
    display: flex;
    align-items: center;
    margin-bottom: 64px;
  }

  &__titleImg {
    margin-right: 15px;
  }

  &__item {
    margin-bottom: 8px;
    width: 100%;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    margin: 64px 0 64px 0;
  }

  .section__title {
    font-weight: 900;
    font-size: 52px;
    line-height: 65px;
  }
}
</style>
