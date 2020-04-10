<template>
  <section class="container how-to-donate" tabindex="0">
    <div class="how-to-donate__content">
      <h1 class="section__title">Como doar</h1>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><Slide1></Slide1></swiper-slide>
        <swiper-slide><Slide1></Slide1></swiper-slide>
        <swiper-slide><Slide1></Slide1></swiper-slide>
        <div slot="pagination" class="swiper__pagination"></div>
        <div slot="button-prev" class="swiper__buttonPrev"></div>
        <div slot="button-next" class="swiper__buttonNext"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Slide1 from './Slides/Slide1'
import 'swiper/css/swiper.css'

export default {
  name: 'HowToDonate',
  components: {
    Swiper,
    SwiperSlide,
    Slide1
  },
  data() {
    return {
      swiperOption: {
        keyboard: {
          enabled: true
        },
        pagination: {
          el: '.swiper__pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper__buttonNext',
          prevEl: '.swiper__buttonPrev'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global.scss';

.how-to-donate {
  height: 100vh;

  &__content {
    text-align: center;
    grid-column: 1 / 13;
    width: 100%;
  }
}

.swiper {
  position: relative;
  width: 100%;

  &__pagination {
    padding-top: 10px;
  }
}
</style>
