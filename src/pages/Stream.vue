<template>
  <div>
    <section-head>{{ currentVideo.name }}</section-head>
    <h3>{{ currentVideo.description }}</h3>
    <video class="preview" controls>
        <source :src="videoUrl" type="video/mp4">
    </video>
  </div>
</template>

<script>
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import gallery from '../components/molecules/Gallery/Gallery.vue';
export default {
  name: 'Stream',
  components: { sectionHead, gallery },
  computed: {
    currentVideo() {
      return this.$route.params.video;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>