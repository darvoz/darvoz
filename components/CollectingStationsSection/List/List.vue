<template>
  <div class="list__container">
    <div class="list__content">
      <LocationCard
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :location="item.location"
        :working-hours="item.workingHours"
        :url="item.url"
      />
    </div>
  </div>
</template>

<script>
import LocationCard from '~/components/LocationCard/LocationCard'
export default {
  name: 'CollectionStationsList',
  components: {
    LocationCard
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/_global';

.list__container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.list__content {
  display: grid;
  grid-column: 2 / 12;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 32px;

  @media screen and (min-width: $max-mobile-size) {
    grid-template-columns: repeat(3, minmax(350px, 1fr));
  }
}
</style>
