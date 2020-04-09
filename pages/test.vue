<template>
  <div>
    <Button>Primary Button</Button>
    <Button kind="secondary">Secondary Button</Button>
    <Button link="www.google.com" kind="secondary">Secondary Button</Button>
    <Button kind="tertiary">Simple Link</Button>
    <Button link="www.google.com">Simple Link</Button>
    <Accordion title="Quais são as empresas participantes deste projeto?">
      Tempor venenatis semper sed elit nisl imperdiet enim euismod luctus.
      Volutpat dignissim duis vel, sed lectus nec luctus. Duis diam vestibulum
      in tempor, ridiculus tempor fringilla sociis. Dictum eget velit placerat
      nulla habitant tincidunt hendrerit. Vel varius hendrerit eleifend enim
      blandit est maecenas. Ut cras sed posuere consectetur erat eleifend.
    </Accordion>
  </div>
</template>

<script>
import Button from '~/components/Button/Button.vue'
import Accordion from '~/components/Accordion/Accordion.vue'
export default {
  components: {
    Button,
    Accordion
  }
}
</script>

<style lang="scss">
@import '../styles/_global';
</style>
