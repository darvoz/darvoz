<template>
  <section class="container collecting-stations" tabindex="0">
    <div class="collecting-stations__info">
      <h1 class="section__title collecting-stations__infoTitle">
        Pontos de recolha
      </h1>
      <p class="section__description collecting-stations__infoDescription">
        <span class="collecting-stations__infoDescription--bold">
          #fique
        </span>
        em
        <span class="collecting-stations__infoDescription--bold">
          casa
        </span>
        ,mas se precisar ir as compras ou ao correio, leva contigo o teu
        telemóvel ou tablet antigo ao ponto de coleta.
      </p>
      <div class="collecting-stations__map">
        <Map
          :location="
            location
              ? [location.coords.latitude, location.coords.longitude]
              : undefined
          "
          :zoom="location ? 13 : undefined"
          :markers-location="stations.map((station) => station.coords)"
        >
          <ChooseLocation slot="controller-top-left" :get-location="locateMe" />
        </Map>
      </div>
    </div>
  </section>
</template>

<script>
import ChooseLocation from './ChooseLocation/ChooseLocation'
import Map from '~/components/Map/Map'
export default {
  name: 'CollectingStationsSection',
  components: {
    Map,
    ChooseLocation
  },
  data() {
    return {
      stations: [],
      location: null,
      gettingLocation: false,
      errorStr: null
    }
  },
  async created() {
    const collectingPointsJSON = () =>
      import('~/data/resources/collectingPoints.json').then((m) => {
        return m.default.collectingPoints || m.collectingPoints
      })

    this.stations = await collectingPointsJSON()
  },
  methods: {
    getLocation() {
      return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
          reject(new Error('Geolocation is not available.'))
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(pos)
          },
          (err) => {
            reject(err)
          }
        )
      })
    },
    async locateMe() {
      this.gettingLocation = true
      try {
        this.gettingLocation = false
        this.location = await this.getLocation()
      } catch (e) {
        this.gettingLocation = false
        this.errorStr = e.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global.scss';

.collecting-stations {
  height: 100vh;
  &__info {
    grid-column: 1 / 13;
    justify-items: center;
    text-align: center;
  }

  &__infoTitle {
    font-size: 52px;
    margin-bottom: 47px;
  }

  &__infoDescription {
    font-family: Muli, sans-serif;
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 32px;
    color: $black;

    &--bold {
      color: $primary-color;
    }
  }

  &__map {
    height: 60vh;
    width: 100%;
    margin-top: 64px;
  }
}
</style>
