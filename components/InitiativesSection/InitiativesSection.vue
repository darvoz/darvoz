<template>
  <div>
    <section id="iniciativas" class="container" tabindex="0">
      <div class="content">
        <div class="initiatives">
          <h1 class="section__title initiatives__title">
            {{ localI18n['index.initiatives.headline'] }} <Logo :height="61" />
          </h1>
          <p class="section__description initiatives__description">
            {{ localI18n['index.initiatives.description'] }}
          </p>
          <CardGroup>
            <Card
              v-for="initiative in initiatives"
              :key="initiative.img"
              class="initiatives__card"
              :img="initiative.img"
              :headline="initiative.headline"
              :description="initiative.description"
              :cta="initiative.cta"
            />
          </CardGroup>
        </div>
      </div>
    </section>
    <section
      v-if="endedInitiatives.length"
      id="ended-iniciativas"
      class="container"
      tabindex="0"
    >
      <div class="content">
        <div class="initiatives">
          <h1 class="section__title initiatives__title">
            {{ localI18n['index.initiatives-ended.headline'] }}
          </h1>
          <CardGroup>
            <Card
              v-for="initiative in endedInitiatives"
              :key="initiative.img"
              class="initiatives__card"
              :img="initiative.img"
              :headline="initiative.headline"
              :description="initiative.description"
              :cta="initiative.cta"
            />
          </CardGroup>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import localI18n from '../../data/resources/i18n.json'
import CardGroup from '~/components/CardGroup/CardGroup'
import Card from '~/components/Card/Card'
import Logo from '~/components/Logo/Logo'

export default {
  name: 'InitiativesSection',
  components: {
    Card,
    CardGroup,
    Logo
  },
  data() {
    return {
      localI18n,
      initiatives: [
        {
          img: '/initiatives/telemoveis.svg',
          headline: localI18n['index.initiatives.donate.headline'],
          description: localI18n['index.initiatives.donate.description'],
          cta: {
            label: localI18n['index.initiatives.donate.cta'],
            link: '/doar-telemoveis-tablets'
          }
        }
      ],
      endedInitiatives: [
        {
          img: '/initiatives/carris.svg',
          headline: localI18n['index.initiatives.carris.headline'],
          description: localI18n['index.initiatives.carris.description'],
          cta: {
            label: localI18n['index.initiatives.carris.cta'],
            link: '/carris-mensagens-gratis'
          }
        },
        {
          img: '/initiatives/santos.svg',
          headline: localI18n['index.initiatives.santos.headline'],
          description: localI18n['index.initiatives.santos.description'],
          cta: {
            label: localI18n['index.initiatives.santos.cta'],
            link: '/quadras-santos-populares'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global.scss';

.initiatives {
  grid-column: 2 / 6;

  text-align: center;

  &__description {
    margin: 39px 0 0;
    text-align: center;
  }

  &__card {
    &:last-child {
      margin-top: 56px;
    }
  }
}

@media screen and (min-width: $max-mobile-size) {
  .initiatives {
    grid-column: 2 / 14;

    &__card {
      &:last-child {
        margin-top: 0;
      }
    }
  }
}
</style>
