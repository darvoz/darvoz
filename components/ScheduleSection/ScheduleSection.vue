<template>
  <section class="container" tabindex="0">
    <Card class="schedule" :alternate="true">
      <h1 class="section__title schedule__title">
        Horários Maio
      </h1>
      <table class="schedule__table">
        <thead>
          <tr>
            <th>Dia</th>
            <th>09:30 - 13:00</th>
            <th>14:00 - 18:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td colspan="2">Todas as freguesias</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ajuda</td>
            <td>Alcântara</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Alvalade</td>
            <td>Areeiro</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Arroios</td>
            <td>Avenidas Novas</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Beato e Marvila</td>
            <td>Belém</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Benfica</td>
            <td>Campo de Ourique</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Campolide</td>
            <td>Carnide</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Estrela</td>
            <td>Lumiar</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Misericórdia e Sto António</td>
            <td>Olivais</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Parque das Nações</td>
            <td>Penha de França</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Santa Clara</td>
            <td>Sta Maria Maior</td>
          </tr>
          <tr>
            <td>14</td>
            <td>São Domingos de Benfica</td>
            <td>São Vicente</td>
          </tr>
        </tbody>
      </table>
    </Card>
  </section>
</template>

<script>
import Card from '~/components/Card/Card'
export default {
  name: 'ScheduleSection',
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global.scss';

.schedule {
  font-family: Roboto, sans-serif;
  grid-column: 2 / 6;
  min-width: 100%;
  padding: 20px 10px;

  &__title {
    text-align: center;
  }
  &__table {
    margin-top: 36px;
    width: 100%;
    border-collapse: collapse;

    td,
    th {
      border: 1px solid #c8c8c8;
      text-align: center;
      padding: 10px 8px;
      line-height: 20px;
    }
    td {
      padding: 8px;
      line-height: 27px;
    }
  }
  @media screen and (min-width: $max-mobile-size) {
    grid-column: 2 / 14;
    padding: 48px;

    &__table {
      width: 75%;
      td,
      th {
        border: 1px solid #c8c8c8;
        text-align: center;
        padding: 27px 20px;
        line-height: 27px;
      }
      td {
        padding: 8px 20px;
        line-height: 30px;
        min-width: 200px;
      }
    }
  }
}
</style>
