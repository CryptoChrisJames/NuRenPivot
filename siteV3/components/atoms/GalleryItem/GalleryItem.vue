<template>
  <div
    class="galleryCard"
  >
    <a @click="videoSelected">
      <div class="img__box" @mouseenter="isSelected" @mouseleave="notSelected">
        <div class="overlay" v-show="isHovering">
          <h5>
            {{ videoName }}
          </h5>
        </div>
        <div class="overlay" v-show="currentlyWatching">
          <h5>
            Now Playing
          </h5>
        </div>
        <slot></slot>
      </div>
    </a>
  </div>
</template>

<script>
import config from '../../../config.js';

export default {
    name: 'GalleryItem',
    props: {
        videoContent: {
            type: Object,
            default: () => {},
        }
    },
    data() {
        return {
          isHovering: false,
        };
    },
    computed: {
        videoName() {
          return this.videoContent.displayName;
        },
        currentlyWatching() {
          if(this.$store.state.currentVideo){
            return this.$store.state.currentVideo._id === this.videoContent._id;
          }
          return false;
        },
    },
    methods: {
      videoSelected() {
        window.scrollTo(0,0);
        this.$store.commit('setCurrentVideo', this.videoContent._id);
        this.$router.replace(`/stream/${this.videoContent._id}`);
      },
      isSelected() {
        this.isHovering = true;
      },
      notSelected() {
        this.isHovering = false;
      }
    },
};
</script>

<style lang="scss" scoped>
.galleryCard {
  position: relative;
  line-height: 25px;
  transition: all .15s ease-in-out;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.img__box {
  display: block;
  position: relative;
  width: 100% ;
  overflow: hidden;
  padding: 0;
  margin: 0;
  cursor: pointer;

  img {
      max-width: 100%;
      transition: transform 1.4s ease;
  }
}
.img--hovering {
  transform: scale(1.2);
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.6);

  h5 {
    text-align: center;
    padding-top: 25%;
  }
}
.videoName {
  margin: 0;
  padding: 0px 8px 0px 8px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 15px;
}
</style>
