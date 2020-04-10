<template>
  <section class="container brands" tabindex="0">
    <div class="brands">
      <h1 class="section__title brands__title">Empresas<br />participantes</h1>
      <div class="brands__logos">
        <img
          class="brands__logo"
          src="../assets/Mercedes_Benz_io_logo.png"
          alt="Mercedes-Benz.io"
        />
        <img class="brands__logo" src="../assets/BCG_logo.png" alt="BCG" />
        <img class="brands__logo" src="../assets/NOS_logo.png" alt="NOS" />
      </div>
      <p class="section__description brands__description">
        Duis nibh aliquet ullamcorper consequat nec risus pretium. Ut parturient
        faucibus nibh non libero arcu ac hac vel. Aliquet pretium ut ullamcorper
        sed feugiat dignissim nulla urna. Mauris pellentesque mauris rhoncus
        egestas felis. Ut parturient faucibus nibh non libero arcu ac hac vel
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BrandsSection'
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.brands {
  grid-column: 1 / 13;
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
    margin: 40px 0 40px 0;
  }

  &__logo {
    height: 94px;
    width: 140px;
    object-fit: contain;
    margin-right: 24px;
    border: 1px solid $smoke-white;
    padding: 15px;

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
  }
}
</style>
