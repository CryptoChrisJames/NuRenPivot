<template>
  <span class="galleryWrapper">
    <div class="galleryContainer">
      <span
        v-for="obj in contentObjs"
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
  components: { galleryItem },
  props: {
    contentObjs: {
      type: Array,
      default: () => [],
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
</style>