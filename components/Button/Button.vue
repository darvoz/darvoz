<template>
  <button
    v-if="!link"
    :class="['button', 'button--' + kind.toString()]"
    @click="click"
  >
    <slot />
    <TrendingNeutral v-if="kind === 'tertiary'" />
  </button>
  <a v-else-if="link" @href="href"
    ><slot /><TrendingNeutral v-if="kind === 'tertiary'"
  /></a>
</template>

<script>
import TrendingNeutral from 'vue-material-design-icons/TrendingNeutral.vue'

export default {
  name: 'Button',
  components: {
    TrendingNeutral
  },
  props: {
    link: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    kind: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click() {
      if (!this.disabled) this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables';

.button {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 14px 24px;
  border-radius: 32px;
  line-height: 22px;
  font-size: 16px;
}

.button--primary {
  box-shadow: 0px 8px 16px rgba(81, 97, 210, 0.16);
  background-color: $primary-color;
  color: white;
  font-weight: 900;
}

.button--secondary {
  border: 2px solid $primary-color;
  color: $primary-color;
  font-weight: 900;
}

.button--tertiary {
  color: $primary-color;
  span {
    font-size: 24px;
    margin-left: 8px;
  }
}
</style>
