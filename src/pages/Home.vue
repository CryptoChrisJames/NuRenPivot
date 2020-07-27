<template>
  <div class="homepage">
    <nav-bar />
    <header class="videoHeaderContainer">
      <div v-parallax="-0.3" class="videoContainer">
        <iframe src="https://player.vimeo.com/video/440484598?background=1"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        >
        </iframe>
      </div>
      <div v-parallax="-0.5" class="videoHeaderContent">
        <b>Nu Renaissance Productions</b>
        <div v-parallax="-0.5" class="featuredButtonWrapper">
          <button class="featuredButton">
            New Production!
          </button>
        </div>
      </div>
      <div v-parallax="-0.8" class="arrowWrapper"><div class="arrowDown"></div></div>
    </header>
    <div class="homeContent">
      <section-head>Our Services</section-head>
      <div class="servicesWrapper">
        <div class="services">
          <h3>Video Production</h3>
          <img src="../assets/symbols/021-video camera.svg" alt="" class="symbol">
          <p class="serviceDescription">
            From treatments and mood boards to filming on set, we can take any idea
            that you have from concept to exquisite visual creation.
          </p>
        </div>
        <div class="services">
          <h3>Filmmaking</h3>
          <img src="../assets/symbols/009-director chair.svg" alt="" class="symbol">
          <p class="serviceDescription">
            We have the foundation to produce and direct any script. If you can write
            it, we can bring it to the big screen.
          </p>
        </div>
        <div class="services">
          <h3>Audio/Music Production</h3>
          <img src="../assets/symbols/019-microphone.svg" alt="" class="symbol">
          <p class="serviceDescription">
            No film or video is complete without engaging audio and heartfelt music.
            We have the means to create the fullest cinematic experience possible.
          </p>
        </div>
        <div class="services">
          <h3>Editing Services</h3>
          <img src="../assets/symbols/003-4k film.svg" alt="" class="symbol">
          <p class="serviceDescription">
            We specialize in the post-produciton of video content. We have the capacity
            for all of your editing needs.
          </p>
        </div>
        <div class="services">
          <h3>Film Consultation</h3>
          <img src="../assets/symbols/017-check list.svg" alt="" class="symbol">
          <p class="serviceDescription">
            From script and pitch consultation to planning the film rollout,
            we have the experience to help you bring your projects to life.
          </p>
        </div>
        <div class="services">
          <h3>Marketing Consultation</h3>
          <img src="../assets/symbols/026-review.svg" alt="" class="symbol">
          <p class="serviceDescription">
            Once your video has been completed, we can help take your project
            to the next level by planning social media and marketing campaigns.
          </p>
        </div>
      </div>
      <section-head>Creative Portfolio</section-head>
      <gallery></gallery>
      <About />
      <Contact />
    </div>
  </div>
</template>

<script>
import gallery from '../components/molecules/Gallery/Gallery.vue';
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import apiUrlGenerator from '../funcitons/apiUrlGenerator.js';
import NavBar from '../components/atoms/Header/NavigationBar.vue';
import About from './About.vue';
import Contact from "./Contact.vue";

export default {
  name: 'Home',
  components: {
    gallery,
    sectionHead,
    About,
    Contact,
    NavBar
  },
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
@import '../styles/_colors.scss';

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

.videoHeaderContent {
  color: $AOTLYellow;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Recursive', sans-serif;
  z-index: 10;

  b {
    font-size: 2.5rem;
    font-weight: 900px;
  }
}

.arrowWrapper {
  position: absolute;
  bottom: 26%;
  left: 46.5%;
  margin: 0 auto;
  box-sizing: border-box;
}

.arrowDown {
  position: absolute;
  bottom: 5%;
  margin: 0 auto;
  box-sizing: border-box;
  height: 5vw;
  width: 5vw;
  border-style: solid;
  border-color: $AOTLYellow;
  border-width: 0px 1px 1px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
}

.featuredButtonWrapper {
  width: 100%;
}

.featuredButton {
  margin: 10px;
  padding: 15px;
  color: $AOTLYellow;
  background-color: transparent;
  border: 2px solid $AOTLYellow;
  border-radius: 3px;
  outline: none;
  transition: .45s ease;
}

.featuredButton:hover {
  color: black;
  background-color: $AOTLYellow;
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

  h3 {
    padding: 8px;
  }
}

.serviceDescription {
  padding: 15px 25px 50px 20px;
}

.symbol {
  display: block;
  width: 150px;
  height: auto;
  margin: 35px auto;
}
</style>