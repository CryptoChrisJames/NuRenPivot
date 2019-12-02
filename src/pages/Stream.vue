<template>
  <div class="page-container">
    <section-head>{{ currentVideo.name }}</section-head>
    <p>{{ currentVideo.description }}</p>
    <video class="stream" :src="videoUrl" controls autoplay />
    <section-head>See More</section-head>
    <gallery />
  </div>
</template>

<script>
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import gallery from '../components/molecules/Gallery/Gallery.vue';
import config from '../../config.js';
export default {
  name: 'Stream',
  components: { sectionHead, gallery },
  computed: {
    currentVideo() {
      return this.$store.state.currentVideo;
    },
    videoUrl() {
      return 'http://' + config.currentEnvAPI() + '/stream/' + this.currentVideo.video;
    },
  },
  watch: {
    currentVideo() {
      this.$forceUpdate();
    }
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  margin: 0 auto;

  p { 
    text-align: center;
    font-size: 25px;
    margin: 0 0 6px;
  }
}

.stream {
  display: block;
  margin: 0 auto;
  width: 750px; 
  height: auto;
  outline: none;
}
</style>