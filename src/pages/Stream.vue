<template>
  <div class="page-container">
    <div v-if="currentVideo" class="pageContent">
      <section-head>{{ currentVideo.name }}</section-head>
      <p>{{ currentVideo.description }}</p>
      <video 
        v-if="videoUrl" 
        autoplay 
        loop 
        muted 
        playsinline 
        controls 
        controlslist="nodownload"
        class="stream" 
        type="video/mp4" 
        :key="videoUrl" 
        :src="videoUrl" 
      />
      <section-head>See More</section-head>
      <gallery />
    </div>
    <h1 v-else class="sorry">
      If you're seeing this message, you may have accidently gone to the wrong page.
      Please go to the <router-link to="/">Home</router-link> page.
    </h1>
  </div>
</template>

<script>
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import config from '../../config.js';
import gallery from '../components/molecules/Gallery/Gallery.vue';
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
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
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

  @include tablet {
    width: 650px;     
  }

  @include phone {
    width: 100%;     
  }
}

.sorry {
  text-align: center;
  padding: 120px;
}
</style>