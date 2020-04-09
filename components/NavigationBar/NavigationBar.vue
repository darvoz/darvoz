<template>
  <nav class="navigation-bar">
    <a class="navigation-bar__logo navigation-bar__link" href="#"><Logo /></a>
    <ul class="navigation-bar__items">
      <li class="navigation-bar__item">
        <a href="#o-que-e" class="navigation-bar__link">O que é</a>
      </li>
      <li class="navigation-bar__item">
        <a href="#como-doar" class="navigation-bar__link">Como doar</a>
      </li>
      <li class="navigation-bar__item">
        <a href="#pontos-recolha" class="navigation-bar__link"
          >Pontos de recolha</a
        >
      </li>
      <li class="navigation-bar__item">
        <a href="#perguntas-frequentes" class="navigation-bar__link"
          >Perguntas frequentes</a
        >
      </li>
    </ul>
    <Button kind="primary" link="#pontos-recolha">Quero doar</Button>
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
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';
.navigation-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background-color: $white;
  height: 80px;
  font-family: Muli, sans-serif;

  &__logo {
    font-weight: 900;
    font-size: 32px;
    line-height: 84.4%;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 52px;
    align-content: center;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 168%;
    list-style: none;
    height: 100%;
  }

  &__item:hover {
    .navigation-bar__link {
      border-bottom: 4px solid $primary-color;
    }
  }
  &__link {
    font-style: normal;
    padding: 16px 0;
    color: $black;
  }
}
</style>
