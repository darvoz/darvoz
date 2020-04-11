<template>
  <nav class="navigation-bar">
    <div class="navigation-bar__content">
      <a class="navigation-bar__logo navigation-bar__link" href="#"><Logo /></a>
      <ul class="navigation-bar__items" @click="animateScroll">
<<<<<<< HEAD
        <li class="navigation-bar__item" tabindex="0">
          <a href="#o-que-e" class="navigation-bar__link">O que é</a>
        </li>
        <li class="navigation-bar__item" tabindex="0">
          <a href="#como-doar" class="navigation-bar__link">Como doar</a>
        </li>
        <li class="navigation-bar__item" tabindex="0">
          <a href="#pontos-recolha" class="navigation-bar__link">
            Pontos de recolha
          </a>
        </li>
        <li class="navigation-bar__item" tabindex="0">
          <a href="#perguntas-frequentes" class="navigation-bar__link">
            Perguntas frequentes
          </a>
=======
        <li
          v-for="item in linkList"
          :key="item.name"
          class="navigation-bar__item"
          tabindex="0"
        >
          <a :href="`#${item.link}`" class="navigation-bar__link">{{
            item.name
          }}</a>
>>>>>>> develop
        </li>
      </ul>
      <div class="navigation-bar__cta" tabindex="0">
        <Button
          class="navigation-bar__button"
          kind="primary"
          link="#pontos-recolha"
        >
          Quero doar
        </Button>
        <button class="navigation-bar__mobileMenuIcon">
          <img
            src="../../assets/svg/HamburgerIcon.svg"
            alt="Menu icon"
            @click="toggleMobileMenu"
          />
        </button>
      </div>
    </div>
    <transition name="slide-in">
      <div v-if="openMobileMenu" class="navigation-bar__mobileMenu">
        <ul class="navigation-bar__items" @click="animateScroll">
          <li
            v-for="item in linkList"
            :key="item.name"
            class="navigation-bar__item"
            tabindex="0"
          >
            <a :href="`#${item.link}`" class="navigation-bar__link">{{
              item.name
            }}</a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
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
          name: 'O que é',
          link: 'o-que-e'
        },
        {
          name: 'Como doar',
          link: 'como-doar'
        },
        {
          name: 'Pontos de recolha',
          link: 'pontos-recolha'
        },
        {
          name: 'Perguntas Frequentes',
          link: 'perguntas-frequentes'
        },
        {
          name: 'Quero-doar',
          link: 'pontos-recolha'
        }
      ]
    }
  },
  methods: {
    animateScroll(event) {
      this.closeMobileMenu()

      const clickedElement = event.target
      const navElement = clickedElement.closest('.navigation-bar__link')

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

<<<<<<< HEAD
  position: fixed;
=======
  position: relative;
>>>>>>> develop
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
  height: 80px;
  font-family: Muli, sans-serif;
  z-index: 3;
  box-shadow: 0 5px 10px 5px rgba($gray, 0.2);

  &__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: $container-gap;
    margin: 0 auto;
    height: 100%;

    @media only screen and (max-width: 1124px) {
      width: 100%;
    }
  }

  &__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: $container-gap;
    margin: 0 auto;
    height: 100%;

    @media only screen and (max-width: 1124px) {
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
<<<<<<< HEAD
=======
    margin: 0 24px 0 24px;
>>>>>>> develop
    padding-left: 0;
  }

  &__item {
    margin: 0 16px 0 16px;

    &:hover,
    &:focus {
      outline: none;
      #{$nav-element}__link {
        border-bottom: 4px solid $primary-color;
      }
<<<<<<< HEAD
=======
    }

    &:first-child {
      display: none;
>>>>>>> develop
    }
  }

  &__link {
    font-style: normal;
    padding: 16px 0;
    color: $black;
  }

  &__mobileMenu {
    display: none;
  }

  &__mobileMenuIcon {
    display: none;
  }

  @media only screen and (max-width: $max-mobile-size) {
    &__mobileMenu {
      display: block;
      position: absolute;
      top: 80px;
      right: 0;
      width: 80vw;
      max-width: 300px;
      height: 100vh;
      z-index: 2;
      background-color: $white;
      box-shadow: -8px 4px 9px -4px rgba($black, 0.4);
      touch-action: auto;

      #{$nav-element}__items {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0;

        &:hover {
          #{$nav-element}__link {
            border-bottom: none;
          }
        }
      }

      #{$nav-element}__item {
        text-align: center;
        width: 100%;
        padding: 1rem 1.5rem 1rem 1.5rem;
        font-size: 14px;
        margin: 0;

        &:nth-child(even) {
          background-color: $smoke-white;
        }

        &:first-child {
          display: none;
        }
      }
    }

    &__mobileMenuIcon {
      display: block;
      margin-left: 24px;
    }

    &__cta {
      display: flex;
      flex-direction: row;
    }

    &__content {
      @include container-gap;

      justify-content: space-between;
    }

    &__button {
      justify-self: flex-end;
    }

    &__items {
      display: none;
    }
  }

  @media only screen and (max-width: $small-screen-min) {
    &__mobileMenu {
      #{$nav-element}__item:first-child {
        display: block;
      }
    }
<<<<<<< HEAD

    &__button {
      display: none;
    }
=======
>>>>>>> develop
  }
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 1s ease-in-out;
}

.slide-in-enter,
.slide-in-leave-to {
  transform: translate3d(100%, 0, 0);
}

.slide-in-enter-to {
  transform: translate3d(0, 0, 0);
}
</style>
