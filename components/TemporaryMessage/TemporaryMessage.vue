<template>
  <div
    v-if="showMessage"
    class="temporary-message"
    @click="showMessage = false"
  >
    {{ temporaryMessage }}
    <img
      class="temporary-message__closeIcon"
      src="../../assets/svg/cross-icon-white.svg"
      :alt="localI18n['cookie.closeIcon']"
    />
  </div>
</template>

<script>
  import localI18n from '../../data/resources/i18n.json'

export default {
  name: 'TemporaryMessage',
  props: {
    temporaryMessage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showMessage: true,
      localI18n
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/_global';

.temporary-message {
  position: relative;
  font-family: 'Muli', sans-serif;
  width: 100vw;
  font-size: 14px;
  padding: 16px 20px;
  text-align: center;
  color: $white;
  background-color: $primary-color;

  &__closeIcon {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
</style>
