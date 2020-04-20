<template>
  <div
    v-if="showMessage"
    class="temporary-message"
    @click="showMessage = false"
  >
    {{ temporaryMessage }}
  </div>
</template>

<script>
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
      showMessage: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/_global';

.temporary-message {
  font-family: 'Muli', sans-serif;
  width: 100vw;
  font-size: 15px;
  padding: 15px;
  text-align: center;
  color: $white;
  background-color: $primary-color;
}
</style>
