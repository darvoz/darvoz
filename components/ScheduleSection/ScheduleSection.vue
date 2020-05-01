<template>
  <section class="container" tabindex="0">
    <div class="schedule"></div>
  </section>
</template>

<script>
export default {
  name: 'ScheduleSection'
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global.scss';

.schedule {
  font-family: Roboto, sans-serif;
  // margin-top: -$section-margin;
  // margin-bottom: -$section-margin;
  grid-column: 2 / 6;

  @media screen and (min-width: $max-mobile-size) {
    grid-column: 1 / 16;
  }
}
</style>
