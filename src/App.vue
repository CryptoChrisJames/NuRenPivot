<template>
  <div>
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
    </nav>
    <div class="body-container">
      <Home />
    </div>
  </div>
</template>

<script>
import config from '../config.js';
import Home from './pages/Home.vue';
export default {
  name: 'app',
  components: { Home },
  computed: {
    env() {
      return config.currentEnv();
    }
  }
};
</script>

<style lang="scss" scoped>
@import './styles/_colors.scss';

.body-container {
  font-family: 'Open Sans Condensed', sans-serif;
  // background: linear-gradient(180deg, $white 0%, $orange 51%, $red 75%, $darkRed 100%);
}
.banner {
  margin: 6px 0;
  width: 18%;
}
</style>