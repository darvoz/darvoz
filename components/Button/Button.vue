<template>
  <button
    v-if="!link"
    :class="['button', `button__${kind.toString()}`]"
    @click="click"
  >
    <slot />
    <span v-if="kind === 'tertiary'" class="button__icon">
      <TrendingNeutral decorative :size="24" />
    </span>
  </button>
  <a v-else :href="link" :class="['button', `button__${kind.toString()}`]">
    <slot />
    <span v-if="kind === 'tertiary'" class="button__icon">
      <TrendingNeutral decorative :size="24" />
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
@import '../../styles/_global';

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

  &__primary {
    border: 2px solid transparent;
    box-shadow: 0 8px 16px rgba(81, 97, 210, 0.24);
    background-color: $primary-color;
    color: white;
    font-weight: 900;
    text-align: center;

    &:focus {
      border: 2px solid $black;
      background-color: darken($primary-color, 20%);
      outline: 0;
    }

    &:hover {
      background-color: $button-focus;
    }
  }

  &__secondary {
    border: 2px solid $primary-color;
    color: $primary-color;
    font-weight: 900;

    &:focus {
      background-color: $light-purple;
      color: $white;
      outline: 0;
    }

    &:hover {
      border: 2px solid $button-focus;
      color: $button-focus;
    }
  }

  &__tertiary {
    color: $primary-color;
    padding: 0;
    display: flex;
    justify-content: center;

    &:focus,
    &:hover {
      color: $button-focus;
    }
  }

  &__icon {
    height: 24px;
    margin-left: 8px;
  }

  @media only screen and (max-width: $max-mobile-size) {
    width: 100%;
  }

  @media only screen and (max-width: $small-screen-min) {
    display: none;
  }
}
</style>
