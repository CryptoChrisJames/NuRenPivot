<template>
    <div class="AOTL">
        <section class="landing">
            <div class="titlePoster">
                <img :src="getContent('AOTLTitle.jpg')" alt="" class="title">
                <div class="navWrapper">
                    <navbar />
                </div>
            </div>
            <p>test</p>
        </section>
    </div>
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

.titlePoster {
    position: relative;
    min-width: 100%;
    min-height: 100%;
}

.title {
    position: absolute;
    width: 100%;
}

.navWrapper {
    position: absolute;
    padding: 15px;
    width: 100%;
}
</style>