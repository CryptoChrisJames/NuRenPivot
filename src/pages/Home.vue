<template>
  <div class="homepage">
    <section-head>Feature Films and Creative Media</section-head>
    <gallery></gallery>
  </div>
</template>

<script>
import gallery from '../components/molecules/Gallery/Gallery.vue';
import sectionHead from '../components/atoms/Header/SectionHead.vue';
export default {
  name: 'Home',
  components: { gallery, sectionHead },
  mounted() {
    this.$store.commit('resetCurrentVideo');
  }
};
</script>

<style lang="scss" scoped>
.divider {
  min-width: 100%;
  min-height: 55px;
}
</style>