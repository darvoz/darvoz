<template>
  <div class="stats-section">
    <div class="stats-section__content">
      <p class="stats-section__contentNumber">
        {{ currentStatValue }}
      </p>
      <p>Equipamentos Doados</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsSection',
  data() {
    return {
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
  background: url('../assets/svg/statsBG.svg') no-repeat center;
  background-size: contain;
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: $stats-gradient;
    box-shadow: 0 24px 74px rgba(0, 0, 0, 0.15);
    border-radius: 150px;
    height: 250px;
    width: 250px;
    color: $white;
    font-family: Roboto, sans-serif;
    font-style: normal;
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
}
</style>
