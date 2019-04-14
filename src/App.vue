<template>
  <div id="app">
    <div class="container">
      <img class="banner" src='./assets/white.jpg'>
      <div class="customnav">
        <router-link class="tabs" to="/">Home</router-link>
        <router-link class="tabs" to="/contact">Contact</router-link>
        <router-link class="tabs" to="/about">About</router-link>
      </div>
      <div class="contentcontainer">        
        <router-view></router-view>
      </div>
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
  display: flex; 
  
}

.grid-container {
  flex: 100%;
}

.container{
  min-width:100%;
}

.banner{
  width: 100%;
  padding-bottom: 15px;
}

.customnav{
  display: flex;
}

.tabs{
  flex: 100%;
  text-decoration: none;  
  color: #2c3e50;
  font-size: 25px;
}

.contentcontainer{
  margin:5%;
}
</style>
