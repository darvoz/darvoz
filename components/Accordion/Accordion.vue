<template>
  <div class="accordion">
    <button class="accordion__button" @click="click">
      {{ title }}
      <span v-if="!open" class="accordion__buttonIcon">
        <Plus :size="24" />
      </span>
      <span v-else class="accordion__buttonIcon">
        <Minus :size="24" />
      </span>
    </button>
    <div
      :class="['accordion__content', open ? 'accordion__content--open' : '']"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import Plus from 'vue-material-design-icons/Plus.vue'
import Minus from 'vue-material-design-icons/Minus.vue'
export default {
  name: 'Accordion',
  components: {
    Plus,
    Minus
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    click() {
      if (!this.disabled) this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables';

.accordion {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  &__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    background: $smoke-white;
    border-radius: 4px;
    font-weight: bold;
    line-height: 27px;
    font-size: inherit;
  }

  &__content {
    position: relative;
    top: 0;
    height: 0;
    overflow: hidden;
    transition: 0.4s;
    padding: 0 24px;
    line-height: 30px;
    color: $gray;

    &--open {
      padding: 24px;
      background: $white;
      height: auto;
    }
  }

  &__buttonIcon {
    height: 24px;
  }
}
</style>
