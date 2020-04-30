<template>
  <div class="video__container">
    <video ref="video" class="video" :controls="play" @pause="onPlayPause">
      <source :src="src" />
    </video>
    <button v-if="!play" class="video__play-button" @click="onPlayPause">
      <PlayIcon :size="40" class="video__play-button__icon" />
    </button>
  </div>
</template>

<script>
import PlayIcon from 'vue-material-design-icons/Play.vue'
export default {
  name: 'Video',
  components: {
    PlayIcon
  },
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      play: false
    }
  },
  methods: {
    onPlayPause() {
      this.play ? this.$refs.video.pause() : this.$refs.video.play()
      this.play = !this.play
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_global';
.video__container {
  position: relative;
  width: 100%;
}

.video {
  border-radius: 16px;
  display: block;
  height: 100%;
  width: 100%;

  &__play-button {
    border-radius: 50%;
    background-color: $primary-color;
    color: $white;
    box-shadow: 0px 6px 30px $primary-color;
    padding: 30px 30px 28px 28px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &__icon > svg {
      margin-top: 2px;
      margin-left: 2px;
    }
  }
}
</style>
