<template>
  <div class="content">
    <!-- <div
      v-if="env !== 'prod'"
      id="env-info"
    >
      <h2
        style="text-align: center"
      >
        {{ env }}
      </h2>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import config from '../config.js';
import apiUrlGenerator from './funcitons/apiUrlGenerator.js';

export default {
  name: 'app',
  computed: {
    env() {
      return config.currentEnv();
    },
  },
  async mounted() {
    this.$store.commit('toggleLoading');
    await this.$store.dispatch('getVideoContent');
    this.$store.commit('toggleLoading');
  },
  methods: {
    getContent(content) {
      return apiUrlGenerator.getContent(content);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './styles/_colors.scss';
@import './styles/_variables.scss';
.content {
  font-family: 'Open Sans Condensed', sans-serif;
}
</style>