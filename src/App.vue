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
    <nav class="header">
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
    </div>
  </div>
</template>

<script>
import config from '../config.js';
export default {
  name: 'app',
  computed: {
    env() {
      return config.currentEnv();
    },
  },
  async mounted() {
    this.$store.commit('toggleLoading');
    await this.$store.dispatch('getVideoListandObjects');
    this.$store.commit('toggleLoading');
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

.banner {
  margin: 6px 0;
  width: 18%;

  @include tablet {
    width: 43%;
  }

  @include phone {
    display: block;
    margin: 0 auto;
    width: 75%;
  }
}

.links {
  float: right;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 35px;

  @include phone {
    display: block;
    float: none;
    margin: 0 20px;
    padding: 35px 0;
  }
}

.tabLink {
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 35px;
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