<template>
  <button
    v-if="!link"
    :class="['button', `button__${kind.toString()}`]"
    @click="click"
  >
    <slot />
    <span class="button__icon">
      <TrendingNeutral v-if="kind === 'tertiary'" decorative size="24" />
    </span>
  </button>
  <a v-else :href="link" :class="['button', `button__${kind.toString()}`]">
    <slot />
    <span class="button__icon">
      <TrendingNeutral v-if="kind === 'tertiary'" decorative size="24" />
    </span>
  </a>
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
      type: String,
      default: null
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
  background-color: transparent;
  cursor: pointer;

  &__primary {
    box-shadow: 0px 8px 16px rgba(81, 97, 210, 0.16);
    background-color: $primary-color;
    color: white;
    font-weight: 900;
  }

  &__secondary {
    border: 2px solid $primary-color;
    color: $primary-color;
    font-weight: 900;
  }

  &__tertiary {
    color: $primary-color;
  }

  &__icon {
    height: 24px;
    margin-left: 8px;
  }
}
</style>
