<template>
  <div id="app">
    <div class="container">
      <!--
      <img class="banner" src='./assets/white.jpg'>
      <div class="customnav">
        <router-link class="tabs" to="/">Home</router-link>
        <router-link class="tabs" to="/contact">Contact</router-link>
        <router-link class="tabs" to="/about">About</router-link>
      </div>
      -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"><span><img class="banner" src='./assets/white.jpg'></span></a>
        <button class="navbar-toggler" style="border: none; margin: 0 auto; color:#2c3e50; padding-top: 5px;" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <p><b>Menu</b></p>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="tabs" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="tabs" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="tabs" to="/about">About</router-link>
            </li>            
          </ul>
        </div>
      </nav>
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

.nav-item{  
  margin: 15px;
}

.contentcontainer{
  margin:5%;
}
</style>
