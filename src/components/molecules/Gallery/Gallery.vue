<template>
  <div class="container">
    <span 
      v-for="key in projectKeys" 
      v-bind:key="key.id"
      class="vidBox"
    >
      <gallery-item 
        :videoId="key"
      />
    </span>
  </div>
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
            + '/project/videos');
    this.projectKeys = keys.data;
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.vidBox {
  padding: 1%;
}
</style>