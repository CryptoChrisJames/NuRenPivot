<template>
  <div 
    class="galleryCard"
  > 
    <span v-if="isLoading" class="loading"></span>
    <a v-else @click="videoSelected">
      <div class="img__box"
        @mouseenter="isSelected"
        @mouseleave="notSelected"
      >
        <div 
          class="overlay"
          v-if="isHovering"
        >
          <h5>
            {{ videoName }}
          </h5>
        </div>
        <img
          :src="videoThumbnail"
        >
      </div>
    </a>
  </div>
</template>

<script>
export default {
    name: 'GalleryItem',
    props: {
        videoId: {
            type: String,
            default: '',
        }
    },
    data() {
        return {
          video: {},
          isLoading: true,
          isHovering: false,
        };
    },
    computed: {
        videoObject() {
          const Dtos = this.$store.state.videoIconDTOs;
          return Dtos.find(x => x._id === this.videoId);
        },
        videoThumbnail() {
          return this.video.thumbnail;
        },
        videoName() {
          return this.video.name;
        }
    },
    methods: {
        videoSelected() {
            this.$router.push({ path: '/view', params: { key: this.videoName }});
        },
        isSelected() {
            this.isHovering = true;
        },
        notSelected() {
          this.isHovering = false;
        }
    },
    watch: {
      videoObject(newVal) {
        this.video = newVal;
      }
    }
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
.loading {
  display: inline-block;
  margin: 20% 35%;
  width: 85px;
  height: 85px;
  border: 3px solid white;
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>