<template>
  <div class="content">
    <div
      v-if="env !== 'prod'"
      id="env-info"
    >
      <h2
        style="text-align: center"
      >
        {{ env }}
      </h2>
    </div>
    <div>
      <div :class="generateMenuClass()">
        <img class="logo" src="./assets/logo-trans.png" alt="" >
        <button class="menuButton"><b>M E N U</b></button>
        <span class="socials">
          <a href="https://www.instagram.com/nu_ren_productions/" class="social">
            <img src="./assets/034-instagram.svg">
          </a>
          <a href="https://www.youtube.com/channel/UCbMEhrBBQ4jTiC7R3RwSMWA" class="social">
            <img src="./assets/002-youtube.svg">
          </a>
        </span>
      </div>
      <img class="header" :src="getContent('header.jpg')" alt="">
    </div>
    <!-- <nav class="header">
      <img class="banner" src='./assets/white.jpg'>
      <div class="links">
        <router-link class="tabLink" to="/">Home</router-link>
        <router-link class="tabLink" to="/about">About</router-link>
        <router-link class="tabLink" to="/contact">Contact</router-link>
      </div>
    </nav>
    <div class="body-container">
      <router-view />
    </div>
    <div class="footer">
      <a href="https://www.instagram.com/nu_ren_productions/" class="social">
        <img src="./assets/034-instagram.svg">
      </a>
      <a href="https://www.youtube.com/channel/UCbMEhrBBQ4jTiC7R3RwSMWA" class="social">
        <img src="./assets/002-youtube.svg">
      </a>
    </div> -->
  </div>
</template>

<script>
import config from '../config.js';
import apiUrlGenerator from './funcitons/apiUrlGenerator.js';

export default {
  name: 'app',
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    env() {
      return config.currentEnv();
    },
  },
  async mounted() {
    this.$store.commit('toggleLoading');
    await this.$store.dispatch('getVideoContent');
    this.$store.commit('toggleLoading');
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  methods: {
    getContent(content) {
      return apiUrlGenerator.getApiURL() + 'design/' + content;
    },
    onResize(){
      this.windowWidth = window.innerWidth;
    },
    generateMenuClass() {

    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles/_colors.scss';
@import './styles/_variables.scss';
.content {
  font-family: 'Open Sans Condensed', sans-serif;
}

.body-container {
  font-family: 'Open Sans Condensed', sans-serif;
}

.mobileMenu {
  padding: 0;
  margin: 0;
  display: grid;
}

.menuButton {
  box-shadow: none;
  background-color: transparent;
  color: lightgray;
  padding: 8px 20px;
  border: 2px solid lightgray;
  border-radius: 15px;
}

.logo {
  width: 15%;
}

.header {
  width: 100vw;
}

.links {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 15% 0 50%;

  @include tablet {
    padding: 0;
  }

  @include phone {
    padding: 0;
  }
}

.tabLink {
  margin: 0 auto;
  padding: 30% 0;
  text-decoration: none;
  color: black;
  font-size: 25px;
}

.footer {
  display: flex;
  margin: 50px 35% 50px 35%;

  @include tablet {
    margin: 50px 15% 50px 15%;
  }

  @include phone {
    margin: 50px 0 50px 0;
  }
}

.social {
  flex: 50%;

  img {
    display: block;
    margin: auto;
    width: 50px;
    height: auto;
  }
}
</style>