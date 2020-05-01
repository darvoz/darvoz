<template>
  <div class="list__container">
    <div class="list__content">
      <LocationCard
        v-for="item in filteredItems"
        :key="item.name"
        :name="item.name"
        :location="item.location"
        :working-hours="item.workingHours"
        :url="item.url"
      />
    </div>
    <Button
      v-if="items && items.length > 6"
      class="list__seeMore"
      kind="secondary"
      @click="toggleSeeAll()"
      >{{
        seeAll
          ? localI18n['collecting-stations.list.see-less']
          : localI18n['collecting-stations.list.see-all']
      }}</Button
    >
  </div>
</template>

<script>
import localI18n from '../../../data/resources/i18n.json'
import LocationCard from '~/components/LocationCard/LocationCard'
import Button from '~/components/Button/Button'
const DEFAULT__NUMBER_OF_ITEMS = 6
export default {
  name: 'CollectionStationsList',
  components: {
    LocationCard,
    Button
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      seeAll: false,
      localI18n
    }
  },
  computed: {
    filteredItems() {
      if (this.items) {
        return this.seeAll
          ? this.items
          : this.items.slice(0, DEFAULT__NUMBER_OF_ITEMS)
      }
      return []
    }
  },
  methods: {
    toggleSeeAll() {
      this.seeAll = !this.seeAll
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
  grid-template-columns: auto;
  grid-gap: 32px;
}

.list__seeMore {
  grid-column: 2 / 12;
  margin: 40px 0;
}

@media screen and (min-width: $max-mobile-size) {
  .list__content {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  .list__seeMore {
    grid-column: 6 / 8;
    width: 100%;
  }
}
</style>
