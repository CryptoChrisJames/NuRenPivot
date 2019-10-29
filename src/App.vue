<template>
  <div id="app">
    <h1 v-if="env != prod">{{ env }}</h1>
    <div class="header">
        <a class="navbar-brand" href="#/"><span><img class="banner" src='./assets/white.jpg'></span></a>
    </div>
    <div class="content">
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
