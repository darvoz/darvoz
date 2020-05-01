<template>
  <footer class="container footer__container">
    <div class="footer">
      <div class="item__section__container item__section__container--special">
        <div class="social__container">
          <a
            class="social-icon"
            target="_blank"
            href="https://www.facebook.com/Projecto-DarVoz-108603290813171/"
          >
            <img src="../../assets/svg/Youtube.svg" />
          </a>
          <a
            class="social-icon"
            target="_blank"
            href="https://instagram.com/projectodarvoz"
          >
            <img src="../../assets/svg/Instagram.svg" />
          </a>
          <a
            class="social-icon"
            target="_blank"
            href="https://www.youtube.com/channel/UCSRtBLRplG-k4pMaz5sXvmA"
          >
            <img src="../../assets/svg/Facebook.svg" />
          </a>
        </div>
        <div class="copyright__container">
          Copyright 2020 - Mercedes-Benz.io & BCG
        </div>
      </div>
      <div class="item__section__container">
        <div class="item__section">
          <h6 class="item__header">
            <nuxt-link class="item__header__link" to="/">Home</nuxt-link>
          </h6>
        </div>
        <div class="item__section">
          <h6 class="item__header">
            <nuxt-link class="item__header__link" to="/aquemnaotem"
              >Iniciativa #DarVozAQuemNaoTem</nuxt-link
            >
          </h6>
          <p>
            <nuxt-link class="item" to="/aquemnaotem#como-doar"
              >Como doar</nuxt-link
            >
          </p>
          <p>
            <nuxt-link class="item" to="/aquemnaotem#pontos-recolha"
              >Pontos de recolha</nuxt-link
            >
          </p>
        </div>
        <div class="item__section">
          <h6 class="item__header">
            <nuxt-link class="item__header__link" to="/carris"
              >Iniciativa #DarVozCarris</nuxt-link
            >
          </h6>
          <p>
            <nuxt-link class="item" to="/carris#mensagem"
              >Deixe uma mensagem</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'
export default {
  name: 'Footer',
  data() {
    return { localI18n, iconSize: 48 }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';
.footer__container {
  background-color: $primary-color;
  padding-top: 48px;
}

.footer {
  font-family: Roboto;
  font-size: 16px;
  line-height: 190%;
  grid-column: 2 / 6;
  display: grid;
  grid-template-rows: 1fr 1fr;
  color: $white;
}

.social__container {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
}

.copyright__container {
  text-align: center;
}

.item {
  font-size: 16px;
  line-height: 190%;
  color: $white;
  &__section__container {
    font-family: Roboto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 41px;

    &--special {
      grid-row: 2 / 2;
    }
  }

  &__header {
    font-weight: bold;
    font-size: 16px;
    line-height: 168%;
    margin-bottom: 29px;

    &__link {
      color: $white;
    }
  }
}

@media screen and (min-width: $max-mobile-size) {
  .footer {
    grid-column: 2 / 14;
    grid-template-rows: auto;
    grid-auto-flow: column;
    padding-bottom: 100px;
  }

  .copyright__container {
    text-align: left;
  }

  .social__container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    > *:not(:first-child) {
      margin-left: 12px;
    }
  }

  .item__section__container {
    grid-template-columns: auto auto auto;

    &--special {
      grid-template-columns: auto;
      grid-row: 1 / 2;
    }
  }
}
</style>
