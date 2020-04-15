<template>
  <div class="separator">
    <img
      class="separator__mobile"
      src="../../assets/svg/brands-line-out.svg"
      alt=""
      role="presentation"
    />
    <img
      class="separator__desktop"
      src="../../assets/svg/brands-line-out-desktop.svg"
      alt=""
      role="presentation"
    />
  </div>
</template>

<script>
export default {
  name: 'SectionSeparator'
}
</script>

<style scoped lang="scss">
@import '../../styles/_global.scss';

.separator {
  width: 100vw;

  &__mobile {
    display: block;
    width: 100%;
  }

  &__desktop {
    display: none;
  }

  @media screen and (min-width: $max-mobile-size) {
    &__mobile {
      display: none;
    }

    &__desktop {
      display: block;
      width: 100%;
    }
  }
}
</style>
