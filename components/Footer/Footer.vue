<template>
  <footer class="container footer__container">
    <div class="footer">
      <div class="copyright__container">
        Copyright 2020 - Mercedes-Benz.io & BCG
      </div>
      <div class="item__section__container">
        <div class="item__section">
          <h6 class="item__header">
            <nuxt-link class="item__header__link" to="/">Home</nuxt-link>
          </h6>
        </div>
        <div class="item__section">
          <h6 class="item__header">
            <nuxt-link class="item__header__link" to="/telemoveis"
              >Iniciativa #DarVozAQuemNaoTem</nuxt-link
            >
          </h6>
          <p>
            <nuxt-link class="item" to="/telemoveis#como-doar"
              >Como doar</nuxt-link
            >
          </p>
          <p>
            <nuxt-link class="item" to="/telemoveis#pontos-recolha"
              >Pontos de recolha</nuxt-link
            >
          </p>
        </div>
        <div class="item__section">
          <h6 class="item__header">
            <nuxt-link class="item__header__link" to="/darvozcarris"
              >Iniciativa #DarVozCarris</nuxt-link
            >
          </h6>
          <p>
            <nuxt-link class="item" to="/darvozcarris#mensagem"
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
    return { localI18n }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';
.footer__container {
  background-color: $smoke-white;
  padding-top: 48px;
}

.footer {
  font-family: Roboto;
  font-size: 16px;
  line-height: 190%;
  grid-column: 2 / 6;
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.copyright__container {
  grid-row: 2 / 3;
  color: $gray;
  text-align: center;
}

.item {
  font-size: 16px;
  line-height: 190%;
  color: $gray;
  &__section__container {
    font-family: Roboto;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 41px;
  }

  &__header {
    font-weight: bold;
    font-size: 16px;
    line-height: 168%;
    margin-bottom: 29px;

    &__link {
      color: $black;
    }
  }
}

@media screen and (min-width: $max-mobile-size) {
  .footer {
    grid-column: 2 / 14;
    grid-template-rows: auto;
    grid-auto-flow: column;
  }

  .copyright__container {
    grid-row: 1 / 2;
  }
}
</style>
