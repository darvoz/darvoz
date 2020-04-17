<template>
  <div
    :class="['toggle', `toggle--${left ? 'left' : 'right'}`]"
    @click="toggle()"
  >
    <button class="toggle__button">
      <slot name="left" />
    </button>
    <button class="toggle__button">
      <slot name="right" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  data() {
    return {
      left: true
    }
  },
  methods: {
    toggle() {
      this.left = !this.left
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';
.toggle {
  display: flex;
  position: relative;
  width: max-content;
  background-color: $white;
  border-radius: 40px;

  &::before {
    position: absolute;
    content: '';
    background-color: transparent;
    border: 2px solid $primary-color;
    border-radius: 32px;
    transition: 0.4s;
    width: 50%;
    height: 100%;
    top: 51%;
    transform: translateY(-50%);
  }
  &--left {
    > :nth-child(1) {
      color: $primary-color;
    }
  }
  &--right {
    &::before {
      transform: translate(100%, -50%);
    }

    > :nth-child(2) {
      color: $primary-color;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 24px;
    font-family: Muli, sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 22px;
    color: $gray;

    &:focus {
      outline: 0;
    }
  }
}
</style>
