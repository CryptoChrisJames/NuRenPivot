<template>
  <div class="filmCard__contianer">
    <div class="filmCard__column">
      <poster 
        class="filmCard__content"
        :url="posterUrl"
      />
    </div>
    <div class="filmCard__column filmCard__content">
      <h2 class="filmCard__title">{{ name }}</h2>
      <p class="filmCard__desc"><slot /></p>
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
  height: auto;
  width: 100%;
  padding: 0 125px;
}

.filmCard__column {
  display: block;
  float: left;
  height: 350px;
  width: 50%;
}

.filmCard__content {
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 25px;
}

.filmCard__title {
  padding: 30px;
}

.filmCard__desc {
  padding: 30px;
  overflow-y: auto;
}
</style>