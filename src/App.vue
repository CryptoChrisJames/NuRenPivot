<template>
  <div class="body-container" style="text-align: center">
    <link 
      href="https://fonts.googleapis.com/css?family=Biryani:200|Open+Sans+Condensed:300&display=swap" 
      rel="stylesheet"
    >
    <h2>{{ env }}</h2>
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

<style scoped>
.body-container {
  font-family: 'Open Sans Condensed', sans-serif;
}
</style>