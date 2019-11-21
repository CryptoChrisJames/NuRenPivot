<template>
  <div class="filmCard__contianer">
    
  </div>
</template>

<script>
import poster from '../../atoms/Poster/Poster.vue';
export default {
  name: 'FilmCard',
  components: { poster },
  props: {
    posterUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.filmCard__contianer {
  grid-template-columns: 1fr 1fr;
}
</style>