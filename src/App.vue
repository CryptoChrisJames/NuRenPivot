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
    <div class="navigation">
      <div class="logoWrapper">
        <img src="./assets/logo-trans2.png" alt="" class="logo">
      </div>
      <div class="menuButtonWrapper">
        <i :class="isMobile"></i>
      </div>
    </div>
    <router-view />
    <!-- <nav class="header">
      <img class="banner" src='./assets/white.jpg'>
      <div class="links">
        <router-link class="tabLink" to="/">Home</router-link>
        <router-link class="tabLink" to="/about">About</router-link>
        <router-link class="tabLink" to="/contact">Contact</router-link>
      </div>
    </nav>
    <div class="body-container">
    </div> -->
    <div class="footer">
      Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
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
    mobile() {
      return this.windowWidth <= 768;
    },
    isMobile(){
      return this.mobile ? 'fa fa-bars fa-2x menu' : 'fa fa-bars fa-4x menu';
    }
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
      return apiUrlGenerator.getContent(content);
    },
    onResize(){
      this.windowWidth = window.innerWidth;
    },
    generateMenuClass() {
      const classString = 'mobileNav';
      return classString;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles/_colors.scss';
@import './styles/_variables.scss';
.navigation {
  position: absolute;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 20;
}

.logoWrapper {
  position: relative;
}

.logo {
  position: absolute;
  width: 250px;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -15%);
  margin: 60px 0;

  @include phone {
    width: 125px;
    top: 0;
    left: 0;
    transform: none;
    margin: 35px 0;
  }
}

.menuButtonWrapper {
  position: relative;
}

.menu {
  position: absolute;
  top: 50%;
  left: 95%;
  transform: translate(-50%, -50%);
  margin: 90px 0;

  @include phone {
    top: 50%;
    left: 70%;
    transform: none;
    margin: 43px 0;
  }

}

.body-container {
  font-family: 'Open Sans Condensed', sans-serif;
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

.socials {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.social {
  flex: 50%;

  img {
    display: block;
    margin: 10px auto;
    width: 35px;
    height: auto;
  }
}

.content {
  font-family: 'Open Sans Condensed', sans-serif;
}
</style>