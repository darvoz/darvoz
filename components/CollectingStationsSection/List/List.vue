<template>
  <div class="list__container">
    <LocationCard
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :location="item.location"
      :working-hours="item.workingHours"
      :url="item.url"
    />
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
.list__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 32px;
}
</style>
