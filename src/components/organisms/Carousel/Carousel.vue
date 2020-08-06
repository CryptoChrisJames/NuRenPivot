<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <img class="carousel-item active" :src="getContent('FunkJam.png')" />
      <img class="carousel-item" :src="getContent('Michelle.png')" />
      <img class="carousel-item" :src="getContent('Blue.png')" />
      <img class="carousel-item" :src="getContent('Aric.png')" />
      <img class="carousel-item" :src="getContent('Crypto.png')" />
      <img class="carousel-item" :src="getContent('Aric2.png')" />
    </div>
    <a href="#carouselExampleIndicators" class="carousel-control-prev" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="false"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a href="#carouselExampleIndicators" class="carousel-control-next" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="false"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import config from '../../../../config.js';

export default {
  name: "Carousel",
  props: {
    imageKeys: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    getContent(key) {
        return this.getAPIUrl() + key;
    },
    getAPIUrl() {
        return config.currentSecurity() + config.currentEnvAPI() + '/design/';
    },
  }
};
</script>

<style lang="scss">
  
</style>