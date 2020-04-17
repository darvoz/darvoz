<template>
  <section class="container" tabindex="0">
    <div class="brands">
      <h1 class="section__title brands__title">
        {{ localI18n['brands.headline.top'] }}<br />{{
          localI18n['brands.headline.bottom']
        }}
      </h1>
      <div class="brands__logos">
        <img
          loading="lazy"
          class="brands__logo"
          src="../assets/Mercedes_Benz_io_logo.png"
          :alt="localI18n['brands.logo.alt.mercedes-benz']"
        />
        <img
          loading="lazy"
          class="brands__logo"
          src="../assets/BCG_logo.png"
          :alt="localI18n['brands.logo.alt.bcg']"
        />
        <img
          loading="lazy"
          class="brands__logo"
          src="../assets/NOS_logo.png"
          :alt="localI18n['brands.logo.alt.nos']"
        />
      </div>
      <p class="section__description brands__description">
        {{ localI18n['brands.description'] }}
      </p>
    </div>
  </section>
</template>

<script>
import localI18n from '../data/resources/i18n.json'
export default {
  name: 'BrandsSection',
  data() {
    return { localI18n }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.brands {
  grid-column: 2 / 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;

  &__title {
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
  }

  &__logos {
    display: grid;
    grid-gap: $grid-gap;
    margin: 40px 0 40px 0;
  }

  &__logo {
    &:last-of-type {
      margin-right: 0;
    }
  }

  &__description {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 170%;
    text-align: center;
    color: $gray;
  }

  &__separator {
    width: 100vw;
    margin-top: 60px;
  }

  &__separatorDesktop {
    display: none;
  }

  @media screen and (min-width: $max-mobile-size) {
    grid-column: 3 / 13;

    &__logos {
      grid-template-columns: 1fr 1fr 1fr;
    }

    &__logo {
      margin-right: 24px;
    }

    &__separator {
      display: none;
    }

    &__separatorDesktop {
      display: block;
      width: 100vw;
    }
  }
}
</style>
