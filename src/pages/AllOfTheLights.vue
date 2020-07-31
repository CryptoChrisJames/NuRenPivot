<template>
    <div class="aotl">
        <section class="posterContainer">
            
        </section>
    </div>
<img :src="getContent('AOTLTitle.jpg')" alt="" class="title">
</template>

<script>
import config from '../../config.js';
import navbar from '../components/atoms/Header/NavigationBar.vue';

export default {
    name: "AllOfTheLights",
    components: {
        navbar,
    },
    methods: {
        getContent(key) {
            return this.getAPIUrl() + key;
        },
        getAPIUrl() {
            return config.currentSecurity() + config.currentEnvAPI() + '/design/';
        },
    },
};
</script>

<style lang="scss">
@import '../styles/_colors.scss';
@import '../styles/_variables.scss';

.aotl {
  position: relative;
}

.posterContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>