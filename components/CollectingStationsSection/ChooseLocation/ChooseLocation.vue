<template>
  <div class="choose-location">
    <h1 class="choose-location__title">
      {{ localI18n['collecting-stations.map.menu.headline'] }}
    </h1>
    <button class="choose-location__close" @click="$emit('closedControl')">
      <img
        :key="'close'"
        src="../../../assets/svg/cross-icon.svg"
        alt="Fechar"
      />
    </button>
    <div class="choose-location__form">
      <Button
        kind="primary"
        class="choose-location__form__button"
        @click="$emit('getLocation')"
      >
        {{ localI18n['collecting-stations.map.menu.button'] }}
      </Button>
      <p class="choose-location__form__footnotes">
        {{ localI18n['collecting-stations.map.menu.footnote'] }}
      </p>
    </div>
  </div>
</template>

<script>
import * as localI18n from '../../../data/resources/i18n.json'
import Button from '~/components/Button/Button'
export default {
  name: 'ChooseLocation',
  components: {
    Button
  },
  data() {
    return {
      localI18n: localI18n.default
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/_global';
.choose-location {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  background-color: $white;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.08);
  border-radius: 28px;
  max-width: 350px;
  text-align: left;
  font-family: Roboto, sans-serif;

  &__title {
    font-size: 24px;
    line-height: 38px;
  }

  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  &__label {
    font-size: 16px;
    line-height: 30px;
    margin-top: 12px;
    padding: 4px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    &__button {
      width: 85%;
    }

    &__footnotes {
      margin-top: 16px;
    }
  }
}
</style>
