<template>
  <div class="filmCard__contianer">
    <div class="filmCard__column">
      <poster 
        :url="posterUrl"
      />
    </div>
    <div class="filmCard__column">
      {{ name }} 
      <slot />
    </div>
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
  },
};
</script>

<style lang="scss" scoped>
.filmCard__contianer {
  position: relative;
  max-height: 450px;
  display: inline-block;
}

.filmCard__column {
  height: 350px;
}
</style>