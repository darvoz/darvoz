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
        <div slot="pagination" class="swiper__pagination"></div>
        <div slot="button-prev" class="swiper__buttonPrev"></div>
        <div slot="button-next" class="swiper__buttonNext"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
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
  position: relative;
  width: 100%;

  &__pagination {
    text-align: center;
    padding-top: 10px;
  }
}
</style>
