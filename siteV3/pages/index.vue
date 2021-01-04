<template>
  <div class="homepage">
    <section class="videoHeaderContainer">
      <div class="videoContainer">
        <iframe
          src="https://player.vimeo.com/video/440484598?background=1"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        >
        </iframe>
      </div>
      <div class="videoHeaderContent">
        <nav-bar />
        <div class="brandAndCTA">
          <b>Nu Renaissance Productions</b>
          <div class="featuredButtonWrapper">
            <button
              class="featuredButton"
              @click="goToAOTL()"
            >
              New Production!
            </button>
          </div>
        </div>
        <div class="arrowDown"></div>
      </div>
    </section>
    <section class="homeContent">
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
    </section>
    <p style="justify-content: center; text-align: center;">
      Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </p>
  </div>
</template>

<script>
import gallery from '../components/molecules/Gallery/Gallery.vue';
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import apiUrlGenerator from '~/helpers/apiUrlGenerator.js';
import NavBar from '../components/atoms/Header/NavigationBar.vue';
import About from '../components/organisms/About.vue';
import Contact from "../components/organisms/Contact.vue";

export default {
  name: 'Home',
  components: {
    gallery,
    sectionHead,
    About,
    Contact,
    NavBar,
  },
  async mounted() {
    this.$store.commit('resetCurrentVideo');
  },
  methods: {
    getContent(content) {
      return apiUrlGenerator.getContent(content);
    },
    goToAOTL() {
      this.$router.push('allofthelights');
    }
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  position: relative;
}

.videoHeaderContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 100%;
  height: 100vh;
  width: 100vw;
}

.videoContainer {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  width: 100%;
}

.videoContainer iframe {
  min-height: 1020px !important;
  min-width: 1980px !important;
  object-fit: cover;
  position: absolute !important;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
}

.videoHeaderContent {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 25px;
  margin-bottom: 0;
  color: $AOTLYellow;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Recursive', sans-serif;
  z-index: 10;

  b {
    font-size: 2.5rem;
    font-weight: 900px;
  }

  @include widescreen {
    padding-left: 80px;
    padding-right: 80px;
  }
}

.brandAndCTA {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.arrowDown {
  position: absolute;
  bottom: 5%;
  left: 47.5%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  box-sizing: border-box;
  height: 5vw;
  width: 5vw;
  border-style: solid;
  border-color: $AOTLYellow;
  border-width: 0px 5px 5px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;

  @include phone {
    bottom: 10%;
  }

  @include tablet {
    bottom: 15%;
  }

  @include desktop {
    height: 2vw;
    width: 2vw;
    left: 49%;
  }

  @include widescreen {
    height: 2vw;
    width: 2vw;
    left: 49%;
  }
}

.titleWrapper {
  width: 100%;
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

  @include desktop {
  padding: 15px 25% 50px 25%;
  }

  @include widescreen {
  padding: 15px 25% 50px 25%;
  }
}

.symbol {
  display: block;
  width: 150px;
  height: auto;
  margin: 35px auto;
}
</style>