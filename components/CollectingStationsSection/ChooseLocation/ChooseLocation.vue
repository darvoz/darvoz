<template>
  <div class="choose-location">
    <h1 class="choose-location__title">
      {{ localI18n['collecting-stations.map.menu.headline'] }}
    </h1>
    <label class="choose-location__label" for="zip-code">
      {{ localI18n['collecting-stations.map.menu.input.label'] }}
    </label>
    <div class="choose-location__form">
      <div class="choose-location__form__input__container">
        <input
          id="zip-code"
          class="choose-location__form__input"
          type="text"
          size="8"
          :placeholder="
            localI18n['collecting-stations.map.menu.input.placeholder']
          "
        />
        <button @click="getLocation">
          <img src="../../../assets/svg/location.svg" />
        </button>
      </div>
      <Button kind="primary">{{
        localI18n['collecting-stations.map.menu.button']
      }}</Button>
    </div>
  </div>
</template>

<script>
import * as localI18n from '../../../i18n.json'
import Button from '~/components/Button/Button'
export default {
  name: 'ChooseLocation',
  components: {
    Button
  },
  props: {
    getLocation: {
      type: Function,
      required: true
    }
  },
  data() {
    return { localI18n: localI18n.default }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/_global';
.choose-location {
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

  &__label {
    font-size: 16px;
    line-height: 30px;
    margin-top: 12px;
    padding: 4px;
  }

  &__form {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 16px;
    justify-content: center;
    align-items: center;

    &__input__container {
      display: flex;
      padding: 16px 20px;
      opacity: 0.8;
      border: 1px solid $gray;
      border-radius: 58px;
      font-family: Muli, sans-serif;
      font-weight: 900;
      font-size: 16px;
      line-height: 22px;
      background-color: $smoke-white;
    }

    &__input {
      outline: none;
      background-color: transparent;
      border: none;
      font: inherit;
      margin-right: 22px;
    }
  }
}
</style>
