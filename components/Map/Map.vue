<template>
  <client-only>
    <l-map ref="map" :zoom="zoom" :center="location" :options="mapOptions">
      <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <l-control-zoom position="bottomright" />
      <l-control position="bottomleft">
        <slot name="controller-bottom-left" />
      </l-control>
      <l-marker
        v-for="marker in markers"
        :key="JSON.stringify(marker)"
        :lat-lng="marker.coords"
      >
        <l-popup :options="{ closeButton: false }">
          <LocationCard
            :close-button="true"
            :name="marker.name"
            :location="marker.location"
            :working-hours="marker.workingHours"
            :url="marker.url"
            @close="closePopup"
        /></l-popup>
        <l-icon :icon-url="iconUrl" :icon-size="[44, 44]" />
      </l-marker>
    </l-map>
  </client-only>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'
import LocationCard from '~/components/LocationCard/LocationCard'

const PORTUGAL_CENTER_COORDS = [39.55791, -7.8536599]
export default {
  name: 'Map',
  components: {
    LocationCard
  },
  props: {
    iconUrl: {
      type: String,
      default: '/location-marker.svg'
    },
    location: {
      type: Array,
      default: () => PORTUGAL_CENTER_COORDS
    },
    postalCode: {
      type: String,
      default: '',
      required: false
    },
    zoom: {
      type: Number,
      default: 7
    },
    markers: {
      type: Array,
      default: () => [
        {
          coords: [PORTUGAL_CENTER_COORDS[0] - 0.1, PORTUGAL_CENTER_COORDS[1]],
          name: 'Loja NOS Areeiro',
          location: 'Avenida de Roma 13 - Lisboa',
          workingHours: 'Horário: Seg-Sab 08:30 - 21:00',
          url: 'https://goo.gl/maps/y654AiDHVwUXSUHh6'
        },
        {
          coords: [PORTUGAL_CENTER_COORDS[0] + 0.1, PORTUGAL_CENTER_COORDS[1]],
          name: 'Loja NOS Areeiro',
          location: 'Avenida de Roma 13 - Lisboa',
          workingHours: 'Horário: Seg-Sab 08:30 - 21:00',
          url: 'https://goo.gl/maps/y654AiDHVwUXSUHh6'
        }
      ]
    }
  },
  data() {
    return {
      mapOptions: {
        gestureHandling: true,
        gestureHandlingOptions: {
          text: {
            touch: localI18n['collecting-stations.map.touch'],
            scroll: localI18n['collecting-stations.map.scroll'],
            scrollMac: localI18n['collecting-stations.map.scrollMap']
          },
          duration: 2000
        },
        zoomControl: false
      }
    }
  },
  methods: {
    closePopup() {
      this.$refs.map.mapObject.closePopup()
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/_global';
</style>
