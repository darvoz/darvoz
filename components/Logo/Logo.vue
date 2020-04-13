<template>
  <span
    >{{ localI18n['logo.black']
    }}<span class="logo--strong">{{ localI18n['logo.color'] }}</span></span
  >
</template>

<script>
import * as localI18n from '../../i18n.json'
export default {
  name: 'Logo',
  data() {
    return { localI18n: localI18n.default }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';

.logo--strong {
  font-family: 'Muli', sans-serif;
  color: $primary-color;
}
</style>
