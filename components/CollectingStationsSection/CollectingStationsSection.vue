<template>
  <section class="container collecting-stations" tabindex="0">
    <div class="collecting-stations__info">
      <h1 class="section__title collecting-stations__infoTitle">
        Pontos de recolha
      </h1>
      <p class="section__description collecting-stations__infoDescription">
        <span class="collecting-stations__infoDescription--bold">#fique</span
        ><span class="collecting-stations__infoDescription--bold">em</span
        ><span class="collecting-stations__infoDescription--bold">casa</span
        ><span>,</span> mas se precisar ir as compras ou ao correio, leva
        contigo o teu telemóvel ou tablet antigo ao ponto de coleta.
      </p>
    </div>
    <div class="collecting-stations__map">
      <Map
        :location="
          location
            ? [location.coords.latitude, location.coords.longitude]
            : undefined
        "
        :zoom="location ? 13 : undefined"
        :markers-location="stations.map((station) => station.coords)"
        :closed-control="closedControl"
        :postal-code="postalCode"
      >
        <ChooseLocation
          slot="controller-top-left"
          :get-location="locateMe"
          @setPostalCode="setPostalCode"
          @closedControl="closedControl = true"
        />
      </Map>
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
      errorStr: null,
      postalCode: '',
      closedControl: false
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
    setPostalCode(pc) {
      const postalCodeReg = /^[0-9]{4}(?:-[0-9]{3})?$/

      if (postalCodeReg.test(pc)) {
        this.postalCode = pc
      }
    },
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
    margin-bottom: 47px;
  }

  &__infoDescription {
    font-family: Roboto, sans-serif;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: $black;

    &--bold {
      font-size: 24px;
      line-height: 30px;
      font-family: Muli, sans-serif;
      font-weight: 900;
      color: $primary-color;

      &:nth-of-type(2) {
        color: $black;
      }
    }
  }

  &__map {
    grid-column: 1 / 13;
    height: 63vh;
    width: 100vw;
    margin-left: -4%;
  }

  @media screen and (min-width: $max-mobile-size) {
    &__map {
      margin-left: 0;
      width: 100%;
    }

    &__infoDescription {
      font-size: 24px;

      &--bold {
        font-size: 32px;
        line-height: 40px;
      }
    }
  }
}
</style>
