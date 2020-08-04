<template>
    <div class="aotl">
        <section class="headerSection">
            <div class="navbarWrapper">
                <navbar />
            </div>
            <div class="headerImgWrapper">
                <img src="../assets/AOTLHeader.jpg" alt="" class="headerImg">
            </div>
        </section>
        <section class="contentSection">
            <h5 class="logline">
                When an Officer gets held at gunpoint,
                a pretentious black guy must choose between
                risking arrest by helping his provocative white
                friend or running away.
            </h5>
            <div v-if="showAOTL" class="movie">
                <h1>All Of The Lights</h1>
                <iframe src="https://player.vimeo.com/video/433721875"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                >
                </iframe>
            </div>
            <div v-else class="comingSoon">
                <img :src="getContent('poster.jpg')" alt="" class="poster">
                <h2>Movie Coming Soon!</h2>
                <p>Make sure to check here, Aug. 14th, 2020!</p>
            </div>
            <div class="contentPanel">
                <div class="contentBox contentLeft">
                    <div class="synWrapper">
                        <sectionHead>Synopsis</sectionHead>
                        <p class="synopsis">
                            A night of fun with some good friends and girls
                            ends abruptly when gunshots go off. Noah is extremely
                            upset with Hunter’s erratic behavior and confronts him
                            about it. Hunter, doesn’t want to end the night prematurely,
                            so he persuades Noah to keep the party going.
                            The perception of race is tested when Noah’s
                            white friend pulls a gun out on a cop, and he must
                            talk him down before the situation gets worse.
                        </p>
                    </div>
                </div>
                <div class="contentBox contentRight">
                    <img class="contentImg" :src="getContent('Noah-And-Hunter.png')" alt="">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import config from '../../config.js';
import navbar from '../components/atoms/Header/NavigationBar.vue';
import sectionHead from '../components/atoms/Header/SectionHead.vue';

export default {
    name: "AllOfTheLights",
    computed: {
        showAOTL() {
            return this.$store.state.showAOTL;
        },
    },
    components: {
        navbar,
        sectionHead,
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
    font-family: 'Montserrat', sans-serif;
    color: $AOTLTeal;
}

.headerSection {
    height: 100%;
    width: 100%;
}

.navbarWrapper {
    position: relative;
    width: 100%;
    padding: 25px;
    margin-bottom: 0;

    @include widescreen {
        padding-left: 80px;
        padding-right: 80px;
    }
}

.headerImgWrapper {
    width: 100%;
    display: block;
    position: relative;
}

.headerImg {
    width: 100%;
    height: auto;
    margin: 0 auto;
}

.contentSection {
    width: 100%;
}

.logline {
    padding: 25px;
    text-align: center;
}

.comingSoon {
    text-align: center;
    padding: 12px;
}

.movie {
    color: $AOTLYellow;
    text-align: center;
}

.poster {
    padding: 15px;
    width: 100%;
    height: auto;
}


.synopsis {
    padding: 20px;
    text-align: center;
}

.contentBox {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contentPanel {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include phone{
        grid-template-columns: 1fr;
    }

    @include tablet{
        grid-template-columns: 1fr;
    }
}

.contentImg {
    width: 100%;
    height: auto;
}
</style>