<template>
  <nav class="navigation-bar">
    <div class="navigation-bar__content">
      <a class="navigation-bar__logo navigation-bar__link" href="#"><Logo /></a>
      <ul class="navigation-bar__items" @click="animateScroll">
        <li
          v-for="item in linkList"
          :key="item.name"
          class="navigation-bar__item"
        >
          <a :href="`#${item.link}`" class="navigation-bar__link">{{
            item.name
          }}</a>
        </li>
      </ul>
      <Button
        class="navigation-bar__button"
        kind="primary"
        link="#pontos-recolha"
        @click.native="animateScroll"
      >
        Quero doar
      </Button>
    </div>
  </nav>
</template>

<script>
// TODO add alt from images to i18n
import * as localI18n from '../../data/resources/i18n.json'
import Button from '~/components/Button/Button'
import Logo from '~/components/Logo/Logo'

export default {
  name: 'NavigationBar',
  components: {
    Button,
    Logo
  },
  data() {
    return {
      openMobileMenu: false,
      linkList: [
        {
          name: localI18n['nav.about'],
          link: 'o-que-e'
        },
        {
          name: localI18n['nav.how-to-donate'],
          link: 'como-doar'
        },
        {
          name: localI18n['nav.collecting-stations'],
          link: 'pontos-recolha'
        },
        {
          name: localI18n['nav.faq'],
          link: 'perguntas-frequentes'
        }
      ]
    }
  },
  methods: {
    animateScroll(event) {
      this.closeMobileMenu()

      const clickedElement = event.target
      const navElement =
        event.target.tagName === 'A'
          ? event.target
          : clickedElement.closest('.navigation-bar__link')

      if (!navElement) {
        return
      }
      const scrollTarget = document.querySelector(navElement.hash)

      if (scrollTarget) {
        event.preventDefault()

        scrollTarget.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },
    toggleMobileMenu() {
      this.openMobileMenu = !this.openMobileMenu

      document.querySelector('.main').classList.toggle('mobile-menu-open')
      document.addEventListener('scroll', this.closeMobileMenu)
    },
    closeMobileMenu() {
      this.openMobileMenu = false
      document.removeEventListener('scroll', this.closeMobileMenu)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';

.navigation-bar {
  $nav-element: &;
  $nav-max-width: 1124px;
  $nav-bar-index: 1001; //Needs to be higher than 1000 because of the MAP component

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
  height: $nav-height;
  font-family: Muli, sans-serif;
  z-index: $nav-bar-index;
  box-shadow: 0 5px 10px 5px rgba($gray, 0.2);

  &__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: $container-gap;
    margin: 0 auto;
    height: 100%;

    @media only screen and (max-width: $nav-max-width) {
      width: 100%;
    }
  }

  &__logo {
    font-weight: 900;
    font-size: 32px;
    line-height: 84.4%;
  }

  &__items {
    display: flex;
    align-content: center;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 168%;
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

  @media only screen and (max-width: $max-mobile-size) {
    &__content {
      @include container-gap;

      justify-content: space-between;
    }

    &__items {
      display: none;
    }

    &__button {
      width: auto;
    }
  }
}
</style>
