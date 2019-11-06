<template>
  <span>
  </span>
</template>

<script>
import axios from 'axios';
import config from '../../../../config.js';
import galleryItem from '../../atoms/GalleryItem/GalleryItem.vue';
export default {
  name: 'Gallery',
  components: { galleryItem },
  data() {
    return {
      projectKeys: null,
    };
  },
  async mounted() {
    const keys = await axios.get('http://'
            + config.currentEnvAPI()
            + '/keys');
    this.projectKeys = videoObject.data;
  },
};
</script>

<style lang="scss" scoped>
  
</style>