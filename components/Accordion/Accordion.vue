<template>
  <div class="accordion">
    <button class="accordion__button" @click="accordionClicked">
      {{ title }}
      <span v-if="!open" class="accordion__buttonIcon">
        <Plus :size="24" />
      </span>
      <span v-else class="accordion__buttonIcon">
        <Minus :size="24" />
      </span>
    </button>
    <div class="accordion__content">
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
      open: false,
      accordionContentPadding: 24
    }
  },
  computed: {
    accordionContent() {
      return this.$el.querySelector(`.accordion__content`)
    },
    accordionContentHeight() {
      return this.accordionContent.scrollHeight
    }
  },
  methods: {
    accordionClicked() {
      this.open ? this.collapseSection() : this.expandSection()
    },
    collapseSection() {
      const element = this.accordionContent

      element.style.height = null
      element.style.padding = null

      this.open = false
    },
    expandSection() {
      const element = this.accordionContent
      const sectionHeight = this.accordionContentHeight

      element.style.height = sectionHeight + 'px'
      element.style.padding = this.accordionContentPadding + 'px'

      this.open = true
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
    border: none;
    text-align: left;
  }

  &__content {
    position: relative;
    top: 0;
    line-height: 30px;
    color: $gray;
    background: $white;
    padding: 0 24px;
    overflow: hidden;
    transition: all 0.3s ease-out;
    height: 0;
  }

  &__buttonIcon {
    height: 24px;
    margin-left: 5px;
  }
}
</style>
