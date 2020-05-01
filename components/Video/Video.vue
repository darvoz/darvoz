<template>
  <div class="video__container">
    <video
      ref="video"
      class="video"
      :controls="play"
      :src="finalSrc"
      @pause="onPlayPause"
    />
    <button v-if="!play" class="video__play-button" @click="onPlayPause">
      <PlayIcon :size="buttonSize" class="video__play-button__icon" />
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
    },
    hasHdVersion: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      play: false,
      finalSrc: '',
      buttonSize: 30
    }
  },
  mounted() {
    if (window.outerWidth > 1300 && this.hasHdVersion) {
      this.finalSrc = this.src.replace('-HD', '_HD')
    } else {
      this.finalSrc = this.src
    }

    return this.finalSrc
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
