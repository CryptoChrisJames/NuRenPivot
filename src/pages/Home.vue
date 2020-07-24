<template>
  <div class="homepage">
    <header class="videoHeaderContainer">
      <div class="videoContainer">
        <iframe src="https://player.vimeo.com/video/440484598?background=1"
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
      <div class="servicesWrapper">        
        <section-head>Our Services</section-head>
        <div class="services">
          <h3>Video Production</h3>
          <img src="../assets/symbols/021-video camera.svg" alt="" class="symbol">
          <p class="serviceDescription">

          </p>
        </div>
        <div class="services">
          <img src="../assets/symbols/009-director chair.svg" alt="" class="symbol">
        </div>
        <div class="services">
          <img src="../assets/symbols/019-microphone.svg" alt="" class="symbol">
        </div>
        <div class="services">
          <img src="../assets/symbols/003-4k film.svg" alt="" class="symbol">
        </div>
      </div>
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
@import '../styles/_variables.scss';

.videoHeaderContainer {
  position: relative;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;

}

.videoContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden;
  background: var(--primary-color) url('https://player.vimeo.com/video/334230264?background=1') no-repeat center center/cover;
}

.videoContainer iframe {
  height: 100vh !important;
  width: 100vw !important;
  min-height: 1020px !important;
  min-width: 1980px !important;
  object-fit: cover;
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.videoHeaderConent {
  z-index: 10;
}

.homeContent {
  position: relative;
}

.servicesWrapper {
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  margin: 25px auto;

  @include phone {
    grid-template-columns: 1fr;
  }
}

.services {
  align-items: center;
  justify-content: center;
  text-align: center;
}

.symbol {
  display: block;
  width: 150px;
  height: auto;
  margin: 35px auto;
}
</style>