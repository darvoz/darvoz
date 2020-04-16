<template>
  <article class="location-card__container">
    <button
      v-if="closeButton"
      class="location-card__close"
      @click="$emit('close')"
    >
      <img
        :key="'close'"
        src="../../assets/svg/cross-icon.svg"
        :alt="localI18n['close.button.alt']"
      />
    </button>
    <h1 class="location-card__headline">{{ name }}</h1>
    <span class="location-card__info">
      <span class="location-card__info__icon"><MapMarker /></span>
      {{ location }}
    </span>
    <span class="location-card__info">
      <span class="location-card__info__icon"><ClockOutline /></span>
      {{ workingHours }}
    </span>
    <Button
      class="location-card__link"
      kind="tertiary"
      :link="url"
      target="__blank"
      align="left"
    >
      {{ localI18n['location-card.open-on-maps'] }}
    </Button>
  </article>
</template>

<script>
import MapMarker from 'vue-material-design-icons/MapMarker.vue'
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue'
import localI18n from '../../data/resources/i18n.json'
import Button from '~/components/Button/Button'
export default {
  name: 'CollectionStationsListItem',
  components: {
    Button,
    MapMarker,
    ClockOutline
  },
  props: {
    closeButton: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    workingHours: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      localI18n
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';
.location-card {
  &__container {
    display: grid;
    grid-gap: 8px;
    padding: 16px 22px;
    border: 2px solid $white;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: $white;
  }

  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  &__headline {
    font-family: Muli, sans-serif;
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
  }

  &__info {
    display: flex;
    align-items: center;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 30px;
    color: $gray;

    &__icon {
      margin-right: 8px;
      color: $primary-color;
    }
  }
}
</style>
