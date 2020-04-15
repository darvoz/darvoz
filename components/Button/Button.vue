<template>
  <button
    v-if="!link"
    :class="['button', `button__${kind.toString()}`, `button--${align}`]"
    @click="animateScroll"
  >
    <slot />
    <span v-if="kind === 'tertiary'" class="button__icon">
      <TrendingNeutral decorative :size="24" />
    </span>
  </button>
  <a
    v-else
    :href="link"
    :target="target"
    :class="['button', `button__${kind.toString()}`, `button--${align}`]"
    @click="animateScroll"
  >
    <slot />
    <span v-if="kind === 'tertiary'" class="button__icon">
      <TrendingNeutral decorative :size="24" />
    </span>
  </a>
</template>

<script>
import TrendingNeutral from 'vue-material-design-icons/TrendingNeutral.vue'
import animateScroll from '../../utils/utils'

export default {
  name: 'Button',
  components: {
    TrendingNeutral
  },
  props: {
    align: {
      type: String,
      default: 'center'
    },
    link: {
      type: String,
      default: null
    },
    target: {
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
  data() {
    return {
      animateScroll
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';

.button {
  display: flex;
  flex-direction: row;
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
    padding: 0 0 0 8px;

    &:focus,
    &:hover {
      color: $button-focus;
    }
  }

  &__icon {
    height: 24px;
    margin-left: 8px;
  }

  &--left {
    justify-content: flex-start;
  }

  &--center {
    justify-content: space-evenly;
  }

  &--right {
    justify-content: flex-end;
  }

  @media only screen and (max-width: $max-mobile-size) {
    width: auto;
  }

  @media only screen and (max-width: $small-screen-min) {
    display: none;
  }
}
</style>
