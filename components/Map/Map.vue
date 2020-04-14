<template>
  <client-only>
    <l-map
      :zoom="zoom"
      :center="location"
      :options="{ scrollWheelZoom: false }"
      ref="map"
      @focus="enableZoomScroll"
      @click="enableZoomScroll"
      @mouseout="disableZoomScroll"
    >
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <l-control-zoom position="bottomright" />
      <l-control v-if="!closedControl" position="topleft">
        <slot name="controller-top-left" />
      </l-control>
      <l-marker
        v-for="markerLocation in markersLocation"
        :key="JSON.stringify(markerLocation)"
        :lat-lng="markerLocation"
      >
        <l-icon :icon-url="iconUrl" :icon-size="[60, 60]" />
      </l-marker>
    </l-map>
  </client-only>
</template>

<script>
const PORTUGAL_CENTER_COORDS = [39.55791, -7.8536599]
export default {
  name: 'Map',
  props: {
    iconUrl: {
      type: String,
      default: '/location-marker.png'
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
    closedControl: {
      type: Boolean,
      default: false
    },
    zoom: {
      type: Number,
      default: 7
    },
    markersLocation: {
      type: Array,
      default: () => [
        [PORTUGAL_CENTER_COORDS[0] - 0.1, PORTUGAL_CENTER_COORDS[1]],
        [PORTUGAL_CENTER_COORDS[0] + 0.1, PORTUGAL_CENTER_COORDS[1]]
      ]
    }
  },
  methods: {
    enableZoomScroll() {
      this.$refs.map.mapObject.scrollWheelZoom.enable()
    },
    disableZoomScroll() {
      this.$refs.map.mapObject.scrollWheelZoom.disable()
    }
  }
}
</script>
