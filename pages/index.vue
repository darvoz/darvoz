<template>
  <div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-column-gap: 1rem;
  margin: 0 auto;
  width: 90%;
}

.full-width-background {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
</style>
