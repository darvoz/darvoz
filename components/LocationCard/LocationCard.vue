<template>
  <article class="list-item__container">
    <h1 class="list-item__headline">{{ name }}</h1>
    <span class="list-item__info">
      <span class="list-item__info__icon"><MapMarker /></span>
      {{ location }}
    </span>
    <span class="list-item__info">
      <span class="list-item__info__icon"><ClockOutline /></span>
      {{ workingHours }}
    </span>
    <Button
      class="list-item__link"
      kind="tertiary"
      :href="url"
      target="__blank"
      align="left"
    >
      abrir no google maps
    </Button>
  </article>
</template>

<script>
import MapMarker from 'vue-material-design-icons/MapMarker.vue'
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue'
import Button from '~/components/Button/Button'
export default {
  name: 'CollectionStationsListItem',
  components: {
    Button,
    MapMarker,
    ClockOutline
  },
  props: {
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
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';
.list-item {
  &__container {
    display: grid;
    grid-gap: 8px;
    padding: 16px 22px;
    border: 2px solid $white;
    box-sizing: border-box;
    border-radius: 8px;
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
