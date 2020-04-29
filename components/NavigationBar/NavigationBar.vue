<template>
  <nav class="navigation-bar">
    <div class="navigation-bar__content">
      <nuxt-link class="navigation-bar__logo" to="/"><Logo /></nuxt-link>
      <ul class="navigation-bar__items">
        <li
          v-for="item in linkList"
          :key="item.name"
          class="navigation-bar__item"
        >
          <nuxt-link
            v-if="item.newPage"
            :to="`${item.link}`"
            class="navigation-bar__link"
          >
            {{ item.name }}
          </nuxt-link>
          <a
            v-else
            :href="`${item.link}`"
            class="navigation-bar__link"
            @click="animateScroll"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <Button
        class="navigation-bar__button"
        kind="primary"
        link="#pontos-recolha"
      >
        Quero doar
      </Button>
    </div>
  </nav>
</template>

<script>
import animateScroll from '../../utils/utils'
import Button from '~/components/Button/Button'
import Logo from '~/components/Logo/Logo'

export default {
  name: 'NavigationBar',
  components: {
    Button,
    Logo
  },
  props: {
    linkList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      animateScroll
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';

.navigation-bar {
  $nav-element: &;
  $nav-max-width: 1124px;
  $nav-bar-index: 1002; //Needs to be higher than 1001 because of the MAP component
  @include container-gap();
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
  height: $nav-height;
  font-family: Muli, sans-serif;
  z-index: $nav-bar-index;
  box-shadow: 0 5px 10px 5px rgba($light-gray, 0.1);

  &__content {
    grid-column: 2 / 6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    width: 100%;

    @media screen and (min-width: $max-mobile-size) {
      grid-column: 2 / 14;
    }
  }

  &__items {
    display: flex;
    align-items: center;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 16px;
    list-style: none;
    padding-left: 0;
  }

  &__item {
    margin: 0 16px 0 16px;

    &:hover {
      #{$nav-element}__link {
        border-bottom: 4px solid $primary-color;
      }
    }
  }

  &__link {
    font-style: normal;
    padding: 16px 0;
    color: $black;

    &:focus {
      outline-color: $primary-color;
      outline-width: 2px;
    }
  }

  &__logo {
    &:focus {
      outline-color: $primary-color;
      outline-width: 2px;
    }
  }

  @media only screen and (max-width: $max-mobile-size) {
    &__content {
      @include container-gap;
    }

    &__items {
      display: none;
    }
  }
}
</style>
