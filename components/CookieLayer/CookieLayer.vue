<template>
  <div v-if="show" class="cookie" @click="close">
    <h1 class="cookie__header">{{ localI18n['cookie.title'] }}</h1>
    <p>
      {{ localI18n['cookie.description'] }}
      <a href="/politica-cookies.pdf" class="cookie__link" target="_blank">
        {{ localI18n['cookie.link'] }}
      </a>
    </p>
    <img
      class="cookie__closeIcon"
      src="../../assets/svg/cross-icon-white.svg"
      :alt="localI18n['cookie.closeIcon']"
    />
  </div>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'

export default {
  name: 'CookieLayer',
  data() {
    return {
      show: false,
      cookieId: 'cookie-id',
      localI18n
    }
  },
  mounted() {
    const cookie = localStorage.getItem(this.cookieId)

    if (!cookie) {
      this.show = true
    }
  },
  methods: {
    close() {
      localStorage.setItem(
        this.cookieId,
        JSON.stringify('dar-voz-cookie-accepted')
      )
      this.show = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/_global.scss';

.cookie {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: Muli, sans-serif;
  color: $white;
  background-color: $primary-color;
  padding: 30px;
  z-index: 9999;

  &__header {
    margin-bottom: 20px;
  }

  &__link {
    color: $white;
    text-decoration: underline;
  }

  &__closeIcon {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
