<template>
  <span class="galleryWrapper">
    <span
      v-if="isLoading"
      class="loading"
    >
    </span>
    <div
        v-else
        class="galleryContainer"
    >
      <span
        v-for="obj in projectObjs"
        v-bind:key="obj.id"
      >
        <gallery-item
          :videoContent="obj"
        />
      </span>
    </div>
  </span>
</template>

<script>
import galleryItem from '../../atoms/GalleryItem/GalleryItem.vue';
export default {
  name: 'Gallery',
  components: { galleryItem, },
  computed: {
    projectObjs() {
      return this.$store.state.videoContentObjs;
    },
    isLoading() {
      return this.$store.state.loadingData;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/_variables.scss';
.galleryContainer {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @include tablet {
    grid-template-columns: 1fr 1fr;    
  }
  
  @include phone {
    grid-template-columns: 1fr; 
  }
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