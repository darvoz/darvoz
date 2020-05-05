<template>
  <section class="container collecting-stations" tabindex="0">
    <div class="content">
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
          ><span></span
          >{{ localI18n['collecting-stations.description.normal2'] }}
        </p>
      </div>
    </div>
    <div :class="[showMap ? '' : 'content']">
      <div class="collecting-stations__locations">
        <div class="collecting-stations__locations__toggle__container">
          <Toggle @click="toggleMap()">
            <span
              slot="left"
              class="collecting-stations__locations__toggle__content"
            >
              <MapIcon />Mapa
            </span>
            <span
              slot="right"
              class="collecting-stations__locations__toggle__content"
            >
              <FormatListBulletedIcon />Lista
            </span>
          </Toggle>
        </div>
        <div
          :class="[
            showMap
              ? 'collecting-stations__locations__map'
              : 'collecting-stations__locations__list'
          ]"
        >
          <keep-alive>
            <component
              :is="currentTab.component"
              v-bind="showMap ? { markers: stations } : { items: stations }"
            />
          </keep-alive>
        </div>
      </div>
    </div>
    <div class="content">
      <p class="collecting-stations__hint">
        {{ localI18n['collecting-stations.hint'] }}
      </p>
    </div>
  </section>
</template>

<script>
import MapIcon from 'vue-material-design-icons/Map.vue'
import FormatListBulletedIcon from 'vue-material-design-icons/FormatListBulleted.vue'
import localI18n from '../../data/resources/i18n.json'
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
      localI18n,
      stations: [],
      location: null,
      gettingLocation: false,
      errorStr: null,
      postalCode: '',
      tabs: [
        {
          component: Map
        },
        {
          component: List
        }
      ]
    }
  },
  computed: {
    currentTab() {
      return this.showMap ? this.tabs[0] : this.tabs[1]
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
    grid-column: 2 / 6;
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
        color: $light-blue;
      }
    }
  }

  &__locations {
    display: flex;
    flex-direction: column;
    grid-column: 1 / 15;
    position: relative;
    background-color: $smoke-white;
    margin-top: 40px;
    min-height: 70vh;

    &__map {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 70vh;
    }

    &__toggle__container {
      display: flex;
      justify-content: center;
      margin: 40px 0;
      z-index: 1001;
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

  &__hint {
    font-family: Roboto, sans-serif;
    grid-column: 2 / 6;
    text-align: center;
    font-size: 12px;
    color: $gray;
    margin-top: 24px;
  }

  @media screen and (min-width: $max-mobile-size) {
    &__info {
      grid-column: 2 / 14;
    }

    &__locations {
      width: 100%;
      margin-left: 0;

      &--full {
        grid-column: 1 / 15;
      }

      &--normal {
        grid-column: 3 / 12;
      }
    }

    &__map {
      height: 100%;
    }

    &__hint {
      grid-column: 4 / 12;
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
