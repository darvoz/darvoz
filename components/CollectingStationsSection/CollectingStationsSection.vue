<template>
  <section class="container collecting-stations" tabindex="0">
    <div class="collecting-stations__info">
      <h1 class="section__title collecting-stations__infoTitle">
        {{ localI18n['collecting-stations.headline'] }}
      </h1>
      <p class="section__description collecting-stations__infoDescription">
        <span class="collecting-stations__infoDescription--bold">{{
          localI18n['collecting-stations.description.bold1']
        }}</span
        ><span class="collecting-stations__infoDescription--bold">{{
          localI18n['collecting-stations.description.normal1']
        }}</span
        ><span class="collecting-stations__infoDescription--bold">{{
          localI18n['collecting-stations.description.bold2']
        }}</span
        ><span></span>{{ localI18n['collecting-stations.description.normal2'] }}
      </p>
    </div>
    <div class="collecting-stations__map">
      <div class="collecting-stations__map__toggle__container">
        <Toggle @click="toggleMap()">
          <span slot="left" class="collecting-stations__map__toggle__content">
            <MapIcon />Mapa
          </span>
          <span slot="right" class="collecting-stations__map__toggle__content">
            <FormatListBulletedIcon />Lista
          </span>
        </Toggle>
      </div>
      <Map
        v-if="showMap"
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
      <List v-else :items="stations" />
    </div>
  </section>
</template>

<script>
import MapIcon from 'vue-material-design-icons/Map.vue'
import FormatListBulletedIcon from 'vue-material-design-icons/FormatListBulleted.vue'
import * as localI18n from '../../data/resources/i18n.json'
import ChooseLocation from './ChooseLocation/ChooseLocation'
import List from './List/List'
import Map from '~/components/Map/Map'
import Toggle from '~/components/Toggle/Toggle'
export default {
  name: 'CollectingStationsSection',
  components: {
    Map,
    ChooseLocation,
    List,
    Toggle,
    MapIcon,
    FormatListBulletedIcon
  },
  data() {
    return {
      showMap: true,
      localI18n: localI18n.default,
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
    toggleMap() {
      this.showMap = !this.showMap
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
  min-height: $section-min-height;

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
    position: relative;

    &__toggle__container {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }

    &__toggle__content {
      display: flex;
      justify-content: center;
      align-items: center;

      > :first-child {
        margin-right: 8px;
      }
    }
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
