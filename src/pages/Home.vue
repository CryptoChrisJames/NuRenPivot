<template>
  <div class="homepage">
    <header class="carContainer">
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
          <img class="carousel-item active" :src="getContent('design/FunkJam.png')" />
          <img class="carousel-item" :src="getContent('design/Michelle.png')" />
          <img class="carousel-item" :src="getContent('design/Blue.png')" />
          <img class="carousel-item" :src="getContent('design/Aric.png')" />
          <img class="carousel-item" :src="getContent('design/Crypto.png')" />
          <img class="carousel-item" :src="getContent('design/Aric2.png')" />
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
    </header>
    <div class="content">
      <section-head>Feature Films and Creative Media</section-head>
      <gallery></gallery>
    </div>
  </div>
</template>

<script>
import gallery from '../components/molecules/Gallery/Gallery.vue';
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import apiUrlGenerator from '../funcitons/apiUrlGenerator.js';

export default {
  name: 'Home',
  components: { gallery, sectionHead },
  mounted() {
    this.$store.commit('resetCurrentVideo');
  },
  methods: {
    getContent(content) {
      return apiUrlGenerator.getContent(content);
    },
  }
};
</script>

<style lang="scss" scoped>

.car-item {
  min-height: 300px;
  -webkit-background-size: cover;
  -moz-backrgound-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.car-item {
  transition: -webkit-transform 0.5s ease;
  transition: transform 0.5s ease;
  transition: transform 0.5s ease, -webkit-transform 0.5s ease;
  -webkit-backface-visibility: visible;
          backface-visibility: visible;
}

.content {
  position: relative;
}
</style>