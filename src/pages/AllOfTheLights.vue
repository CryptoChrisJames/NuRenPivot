<template>
    <section class="titlePoster">
        <img :src="getContent('AOTLTitle.jpg')" alt="" class="title">
    </section>
</template>

<script>
import config from '../../config.js';

export default {
    name: "AllOfTheLights",
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

.title{
    max-width: 100%;
}
</style>