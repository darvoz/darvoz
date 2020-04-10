<template>
  <section v-if="faqList" class="container" tabindex="0">
    <div class="faq-section">
      <div class="faq-section__title">
        <img
          src="../assets/svg/hashtag.svg"
          alt="title_hashtag"
          role="presentation"
          class="faq-section__titleImg"
        />
        <div class="faq-section__titleText">
          <h1 class="section__title">
            Perguntas <br />
            frequentes
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
      <div class="faq-section__link">
        <Button kind="tertiary">
          Ler mais perguntas
        </Button>
      </div>
    </div>
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
    fetch('/resources/faqList.json')
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
  grid-column: 1 / 13;

  &__title {
    display: flex;
    justify-content: center;
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
    display: flex;
    justify-content: center;
    margin: 64px 0 64px 0;
  }

  .section__title {
    font-weight: 900;
    font-size: 52px;
    line-height: 65px;
  }
}
</style>
