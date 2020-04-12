<template>
  <section class="container how-to-donate" tabindex="0">
    <div class="how-to-donate__content">
      <h1 class="section__title how-to-donate__title">Como doar</h1>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <Slide>
            <h1 slot="title">Verifique</h1>
            <img
              slot="background"
              class="slide__background"
              src="../../assets/slide-1-background.png"
              alt="section_background"
              role="presentation"
            />
            <p slot="description">
              Tem um telemóvel ou tablet com câmara, carregador e em boas
              condições ?
            </p>
            <p slot="notes">
              Independentemente da marca, o telemóvel terá que estar funcional,
              ter câmaras para video conferência e ter um carregador funcional.
              Certifique-se que limpa todos os dados pessoais do mesmo.
            </p>
          </Slide>
        </swiper-slide>
        <swiper-slide>
          <Slide link="#" link-text="Encontre os pontos de recolha">
            <h1 slot="title">Entregue num ponto recolha à sua escolha</h1>
            <p slot="description">
              Existem mais de 17 pontos de recolha, de norte a sul.
            </p>
          </Slide>
        </swiper-slide>
        <swiper-slide>
          <Slide>
            <h1 slot="title">Ajude quem mais precisa neste momento.</h1>
            <p slot="description">
              As instituições vão certificar-se que a sua doação irá chegar a
              quem mais precisa.
            </p>
            <p slot="notes">
              Existem inúmeras pessoas isoladas neste momento, em lares,
              hospitais e outras instituições, sem meios de comunicarem com as
              famílias.
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
