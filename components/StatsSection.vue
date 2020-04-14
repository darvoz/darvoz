<template>
  <div class="stats-section">
    <div class="stats-section__content">
      <p class="stats-section__contentNumber">
        {{ currentStatValue }}
      </p>
      <p>{{ localI18n['stats.headline'] }}</p>
    </div>
  </div>
</template>

<script>
import * as localI18n from '../data/resources/i18n.json'
export default {
  name: 'StatsSection',
  data() {
    return {
      localI18n: localI18n.default,
      finalStatValue: 4500,
      currentStatValue: 0,
      animationDuration: 2500,
      throttleDuration: 200
    }
  },
  mounted() {
    this.currentStatValue = this.finalStatValue - 100
    window.addEventListener(
      'scroll',
      this.throttle(this.isAnyPartOfElementInViewport, this.throttleDuration)
    )
  },
  methods: {
    animateCounter() {
      let start = null
      const diff = this.finalStatValue - this.currentStatValue
      const initialVal = this.currentStatValue
      const step = (ts) => {
        if (!start) {
          start = ts
        }
        // get the time passed as a fraction of total duration
        const progress = (ts - start) / this.animationDuration
        this.currentStatValue = initialVal + Math.floor(progress * diff)

        if (progress < 1) {
          requestAnimationFrame(step)
        }
      }

      requestAnimationFrame(step)
    },
    isAnyPartOfElementInViewport() {
      const rect = this.$el.getBoundingClientRect()
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight

      if (rect.top <= windowHeight && rect.top + rect.height >= 0) {
        window.removeEventListener('scroll', this.isAnyPartOfElementInViewport)
        this.animateCounter()
      }
    },
    throttle(fn, wait) {
      let time = Date.now()
      return () => {
        if (time + wait - Date.now() < 0) {
          fn()
          time = Date.now()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_global.scss';

.stats-section {
  $circle-width: 250px;

  background: url('../assets/svg/statsBG.svg') no-repeat center;
  background-size: contain;
  height: $section-min-height / 2;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 24px 74px rgba(0, 0, 0, 0.15);
    border-radius: 150px;
    height: 250px;
    width: $circle-width;
    color: $white;
    font-family: Roboto, sans-serif;
    font-style: normal;
    background: $primary-color;
  }

  &__contentNumber {
    font-weight: 900;
    font-size: 64px;
    line-height: 75px;
  }

  &__contentText {
    font-weight: bold;
    font-size: 16px;
    line-height: 168%;
  }

  @media only screen and (min-width: $max-mobile-size) {
    &__content {
      &:after {
        content: '';
        background: url('../assets/svg/stats-line-out.svg') no-repeat;
        width: 481px;
        height: 265px;
        position: absolute;
        bottom: -100%;
        left: -481px + ($circle-width / 2);
      }
    }
  }
}
</style>
