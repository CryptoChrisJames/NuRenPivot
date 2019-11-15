<template>
  <div class="card">
    <span v-if="isLoading" class="loading"></span>
    <a v-else @click="videoSelected">
      <div class="img__box">
        <img :src="videoThumbnail">
      </div>
      <div class="videoInfo">
        <h3 class="videoName">
          {{video.name}}
        </h3>
        <p class="videoDescription">
          {{video.description}}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
import axios from 'axios';
import config from '../../../../config.js';
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
            hover: true,
        };
    },
    computed: {
        videoThumbnail() {
            return this.video.thumbnail;
        },
        videoDescription() {
            return this.video.description;
        },
    },
    async mounted() {
        this.isLoading = true;
        const videoObject = await axios.get('http://'
            + config.currentEnvAPI()
            + '/project/thumbnails/'
            + this.videoId);
        this.video = videoObject.data;
        this.isLoading = false;
    },
    methods: {
        videoSelected() {
            this.$router.push({ path: '/view', params: { key: this.videoName }});
        },
    }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  max-width: 500px;
  max-height: 280px;
  line-height: 25px;
  transition: all .15s ease-in-out;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.card:hover {
  background-color: lightgray;
}
.img__box {
  display: block;
  width: 100% ;
  overflow: hidden;
  padding: 0;
  margin: 0;
  cursor: pointer;

  img {
      max-width: 100%;
      transition: transform 1.4s;
  }
}
.videoName {
  margin: 0;
  font-family: 'Yantramanav', sans-serif;
  font-weight: 15px;

}
.videoDescription {
  margin: 0;
  font-family: 'Yantramanav', sans-serif;

}
.loading {
  display: inline-block;
  margin: 20% 35%;
  width: 85px;
  height: 85px;
  border: 3px solid rgba(190, 188, 188, 0.425);
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