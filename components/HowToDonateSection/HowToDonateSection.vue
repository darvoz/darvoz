<template>
  <section class="container how-to-donate" tabindex="0">
    <div class="how-to-donate__content">
      <h1 class="section__title how-to-donate__title">
        {{ localI18n['how-to-donate.headline'] }}
      </h1>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="slide in slides" :key="slide.id">
          <Slide :link="slide.link">
            <h1 slot="title">{{ slide.headline }}</h1>
            <img
              v-if="slide.img"
              slot="background"
              class="slide__background"
              :src="slide.img"
              alt="section_background"
              role="presentation"
            />
            <p v-if="slide.description" slot="description">
              {{ slide.description }}
            </p>
            <p v-if="slide.notes" slot="notes">
              {{ slide.notes }}
            </p>
          </Slide>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev">
          <ChevronLeftCircleOutline :size="iconSize" />
        </div>
        <div slot="button-next" class="swiper-button-next">
          <ChevronRightCircleOutline :size="iconSize" />
        </div>
      </swiper>
    </div>
  </section>
</template>

<script>
import ChevronLeftCircleOutline from 'vue-material-design-icons/ChevronLeftCircleOutline.vue'
import ChevronRightCircleOutline from 'vue-material-design-icons/ChevronRightCircleOutline.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import * as localI18n from '../../data/resources/i18n.json'
import * as slides from '../../data/resources/howToDonate.json'
import Slide from './Slides/Slide'
import 'swiper/css/swiper.css'

export default {
  name: 'HowToDonate',
  components: {
    Swiper,
    SwiperSlide,
    Slide,
    ChevronLeftCircleOutline,
    ChevronRightCircleOutline
  },
  data() {
    return {
      iconSize: 55,
      slides: slides.default,
      localI18n: localI18n.default,
      swiperOption: {
        keyboard: {
          enabled: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
  &__title {
    text-align: center;
    margin-bottom: 47px;
  }
  &__content {
    grid-column: 1 / 13;
    width: 100%;
  }
}

.swiper {
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 34px;
  }

  &-button-prev,
  &-button-next {
    border-radius: 50%;
    --swiper-theme-color: #5161d2;
    text-align: center;
    &::after {
      content: '';
    }
    @media screen and (max-width: $max-mobile-size) {
      top: 15%;
    }
  }
}
</style>
