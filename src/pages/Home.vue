<template>
  <div class="homepage">
    <header class="videoHeaderContainer">
      <div class="videoContainer">
        <iframe src="https://player.vimeo.com/video/334230264?background=1"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        >
        </iframe>
      </div>
      <div class="videoHeaderConent">

      </div>
    </header>
    <div class="homeContent">
      <section-head>Feature Films and Creative Media</section-head>
      <gallery></gallery>
    </div>
  </div>
</template>

<script>
import gallery from '../components/molecules/Gallery/Gallery.vue';
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import apiUrlGenerator from '../funcitons/apiUrlGenerator.js';

export default {
  name: 'Home',
  components: { gallery, sectionHead },
  mounted() {
    this.$store.commit('resetCurrentVideo');
  },
  methods: {
    getContent(content) {
      return apiUrlGenerator.getContent(content);
    },
  }
};
</script>

<style lang="scss" scoped>
.videoContainer {
}

.videoContainer iframe {
}

.homeContent {
  position: relative;
}
</style>