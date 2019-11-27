<template>
  <div class="galleryContainer">
    <span 
      v-for="key in projectKeys" 
      v-bind:key="key.id"
    >
      <gallery-item 
        :videoId="key"
      />
    </span>
  </div>
</template>

<script>
import galleryItem from '../../atoms/GalleryItem/GalleryItem.vue';
export default {
  name: 'Gallery',
  components: { galleryItem },
  computed: {
    projectKeys() {
      return this.$store.state.videoList;
    }
  }
};
</script>

<style lang="scss" scoped>
.galleryContainer {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>