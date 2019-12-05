<template>
  <div class="aboutContainer">
    <img src="../assets/About.jpg" class="pic">
    <div class="description">
      <section-head>About</section-head>
    </div>
  </div>
</template>

<script>
import sectionHead from '../components/atoms/Header/SectionHead.vue';
export default {
  name: 'About',
  components: { sectionHead },
};
</script>

<style lang="scss" scoped>
.aboutContainer {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.pic {
  width: 450px;
  height: auto;
}

.description {
  text-align: center;
}
</style>