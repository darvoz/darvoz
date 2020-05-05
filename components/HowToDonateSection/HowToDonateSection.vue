<template>
  <section id="como-doar" class="container how-to-donate" tabindex="0">
    <div class="content how-to-donate">
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
                loading="lazy"
                class="slide__background"
                :src="slide.img"
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
            <img
              loading="lazy"
              src="../../assets/svg/steps-next.svg"
              alt="Passo anterior"
            />
          </div>
          <div slot="button-next" class="swiper-button-next">
            <img
              loading="lazy"
              src="../../assets/svg/steps-next.svg"
              alt="Proximo passo"
            />
          </div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import localI18n from '../../data/resources/i18n.json'
import slides from '../../data/resources/howToDonate.json'
import Slide from './Slides/Slide'
import 'swiper/css/swiper.css'

export default {
  name: 'HowToDonate',
  components: {
    Swiper,
    SwiperSlide,
    Slide
  },
  data() {
    return {
      iconSize: 38,
      slides,
      localI18n,
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
  min-height: $section-min-height;

  &__title {
    text-align: center;
    margin-bottom: 65px;
  }

  &__content {
    grid-column: 2 / 6;
    width: 100%;
  }

  @media screen and (min-width: $max-mobile-size) {
    &__content {
      grid-column: 2 / 14;
    }
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
    &::after {
      content: '';
    }

    @media screen and (max-width: $max-mobile-size) {
      top: 15%;
    }
  }

  &-button-prev {
    transform: rotate(180deg);
  }
}
</style>
