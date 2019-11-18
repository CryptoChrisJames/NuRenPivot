<template>
  <div class="homepage">
    <gallery></gallery>
  </div>
</template>

<script>
import gallery from '../components/molecules/Gallery/Gallery.vue';
export default {
  name: 'Home',
  components: { gallery },
};
</script>

<style lang="scss" scoped>
</style>