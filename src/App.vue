<template>
  <div id="app">
    <img src='./assets/white.jpg'>
    <div class="grid-container">
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.grid-container {
  display: grid;
  grid-template-columns: 8% 1fr 8%;
  grid-template-areas: ". . .";
}

</style>
