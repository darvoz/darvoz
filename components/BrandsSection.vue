<template>
  <section class="container" tabindex="0">
    <div class="brands">
      <h1 class="section__title brands__title">
        {{ localI18n['brands.headline.top'] }}<br />{{
          localI18n['brands.headline.bottom']
        }}
      </h1>
      <div class="brands__logos">
        <a href="https://www.mercedes-benz.io" target="_black">
          <img
            loading="lazy"
            class="brands__logo"
            srcset="
              ../assets/Mercedes_Benz_io_logo.png 202w,
              ../assets/Mercedes_logo_3x.png      606w
            "
            sizes="(max-width: 870px) 202px, 606px"
            src="../assets/Mercedes_Benz_io_logo.png"
            :alt="localI18n['brands.logo.alt.mercedes-benz']"
          />
        </a>
        <a href="https://www.bcg.com/en-pt/default.aspx" target="_blank">
          <img
            loading="lazy"
            class="brands__logo"
            srcset="../assets/BCG_logo.png 202w, ../assets/BCG_3x.png 606w"
            sizes="(max-width: 870px) 202px, 606px"
            src="../assets/BCG_logo.png"
            :alt="localI18n['brands.logo.alt.bcg']"
          />
        </a>
        <a href="https://www.nos.pt/" target="_blank">
          <img
            loading="lazy"
            class="brands__logo"
            srcset="../assets/NOS_logo.png 202w, ../assets/NOS_logo_3x.png 606w"
            sizes="(max-width: 870px) 202px, 606px"
            src="../assets/NOS_logo.png"
            :alt="localI18n['brands.logo.alt.nos']"
          />
        </a>
        <a href="http://www.carris.pt/" target="_blank">
          <img
            loading="lazy"
            class="brands__logo"
            srcset="
              ../assets/Carris_logo.png    202w,
              ../assets/Carris_logo_3x.png 606w
            "
            sizes="(max-width: 870px) 202px, 606px"
            src="../assets/Carris_logo.png"
            :alt="localI18n['brands.logo.alt.carris']"
          />
        </a>
        <a href="https://www.lisboa.pt/" target="_blank">
          <img
            loading="lazy"
            class="brands__logo"
            srcset="../assets/CML_logo.png 202w, ../assets/CML_logo_3x.png 606w"
            sizes="(max-width: 870px) 202px, 606px"
            src="../assets/CML_logo.png"
            :alt="localI18n['brands.logo.alt.cml']"
          />
        </a>
        <a href="https://www.indigomusica.pt" target="_blank">
          <img
            loading="lazy"
            class="brands__logo"
            srcset="
              ../assets/Indigo_logo.png    202w,
              ../assets/Indigo_logo_3x.png 606w
            "
            sizes="(max-width: 870px) 202px, 606px"
            src="../assets/Indigo_logo.png"
            :alt="localI18n['brands.logo.alt.indigo']"
          />
        </a>
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
    margin: 40px 0;
  }

  &__logo {
    max-width: 220px;
    width: 100%;
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
    grid-column: 4 / 12;

    &__logos {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 24px;
      width: 100%;
      padding: 0 40px; // Padding of 40px is semi magical since designs have contradictory specs
    }

    &__logo {
      width: 100%;
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
