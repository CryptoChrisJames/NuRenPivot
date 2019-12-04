<template>
  <span class="galleryWrapper">
    <span 
      v-if="isLoading" 
      class="loading"
    >
      <loader />
    </span>
    <div
        v-else
        class="galleryContainer"
    >
      <span 
        v-for="key in projectKeys" 
        v-bind:key="key.id"
      >
        <gallery-item 
          :videoId="key"
        />
      </span>
    </div>
  </span>
</template>

<script>
import galleryItem from '../../atoms/GalleryItem/GalleryItem.vue';
import loader from '../../atoms/Loader/Loader.vue';
export default {
  name: 'Gallery',
  components: { galleryItem, loader },
  computed: {
    projectKeys() {
      return this.$store.state.currentGallery;
    },
    isLoading() {
      return this.$store.state.loadingData;
    },
  },
};
</script>

<style lang="scss" scoped>
.galleryContainer {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.loading {
  display: block;
  align-items: center;
  justify-content: center;
}
@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>