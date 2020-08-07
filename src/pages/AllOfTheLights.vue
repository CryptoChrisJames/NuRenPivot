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
                    <img class="contentImg" :src="getContent('NoahxHunter.png')" alt="">
                </div>
            </div>
            <div class="contentPanel">
                <div class="contentBox contentLeft">
                    <img class="contentImg" :src="getContent('DirectorChan.jpg')" alt="">
                </div>
                <div class="contentBox contentRight">
                    <div class="dsWrapper">
                        <sectionHead>Director's Statement</sectionHead>
                        <p class="synopsis">
                            I have always been fascinated with lights
                            and the various abstract meanings behind them.
                            All of the Lights is a story about the perception of
                            race and, no matter what you do, you can’t
                            escape the reality of being a black man in America.
                            This film was inspired by the impact of police brutality
                            and racism that sits in my subconscious
                            while searching for a solution to these issues.
                            We explore a friendship between two guys that
                            represents the two different sides of America, and
                            how sometimes it’s hard to see different
                            perspectives when stereotypes are so dominant.
                            The lighting in this film displays the light of
                            life and also the light everyone black person fears.
                        </p>
                    </div>
                </div>
            </div>
            <div class="contentPanel">
                <div class="contentBox contentLeft">
                    <div class="commercialWrapper">
                    <section-head>Official Trailer</section-head>
                        <iframe
                            src="https://player.vimeo.com/video/430534265"
                            width="100%"
                            height="100%"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                        >
                        </iframe>
                    </div>
                </div>
                <div class="contentBox contentRight">
                    <div class="commercialWrapper">
                    <section-head>Teaser</section-head>
                        <iframe
                            src="https://player.vimeo.com/video/433446709"
                            width="100%"
                            height="100%"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                        >
                        </iframe>
                    </div>
                </div>
            </div>
            <sectionHead>The Cast</sectionHead>
            <div class="slideshowWrapper">
                <div class="slideshowHeader">
                    <h3 class="actor">{{ currentCastMember.name }}</h3>
                    as
                    <br>
                    <h5 class="character">{{ currentCastMember.role }}</h5>
                </div>
                <div class="slideshowImage">
                    <img class="ssImg" :src="getContent(currentCastMember.imgKey)" alt="">
                </div>
                <div class="btn-group castSelector" role="group" aria-label="Basic example">
                    <button
                        v-for="(member, idx) in castListing"
                        :key="idx"
                        :class="evalSelection(idx)"
                        @click="setCastSelection(idx)"
                    >
                        {{ member.role }}
                    </button>
                </div>
            </div>
            <section-head>Behind the Scenes</section-head>
            <div class="btsWrapper">
                <p class="btsStatement">
                    <span class="highlight">All of the Lights</span> was written,
                    revised and proofread between early 2018 to early
                    2019 by Chandonae Baskin. Chandonae began
                    pre-production mid 2019 with assistance from
                    Tahani Khawaji and Christopher Smith managing
                    the project. Throughout the rest of 2019, Chandonae would
                    finish recruiting, rehearsing and filming the project.
                    Some of the highlights from the filming process can be seen here.
                </p>
                <div class="btsVideoWrapper">
                    <div class="btsVideo">
                        <h4 class="btsHeader">BTS Video</h4>
                        <iframe
                            src="https://player.vimeo.com/video/433775515"
                            width="100%"
                            height="100%"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                        >
                        </iframe>
                    </div>
                </div>
                <div class="btsCarWrapper">
                        <h4 class="btsHeader">BTS Pictures</h4>
                    <carousel :imageKeys="btsImages" />
                </div>
            </div>
            <div class="musicSectionWrapper">
                <section-head>The Music</section-head>
                <div class="musicStatement">
                    <p>Chandonae is a naturally creative and artistic person.
                        Durning the writing, post and pre-production of the project,
                        music was heavily consumed and used as a direct inspiration
                        for the ambiance of the film. The songs featured in the film
                        were created by the talented Satin Sage (formally KiddSpectro)
                        and allowed to be used in the film.
                    </p>
                </div>
                <div class="musicWrapper">
                    <div class="musicPanel">
                        <div class="contentBox contentLeft">
                            <div class="tidalWrapper">
                                <section-head>Galaxy</section-head>
                                <iframe
                                    class="tidalWindow"
                                    src="https://embed.tidal.com/tracks/112833200?layout=gridify"
                                    frameborder="0"
                                    allowfullscreen
                                >
                                </iframe>
                            </div>
                        </div>
                        <div class="contentBox contentRight">
                            <div class="tidalWrapper">
                                <section-head>Pretend</section-head>
                                <iframe
                                    class="tidalWindow"
                                    src="https://embed.tidal.com/tracks/112833198?layout=gridify"
                                    frameborder="0"
                                    allowfullscreen
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div class="playlist">
                        <section-head>AOTL Playlist</section-head>
                        <div style="position: relative; padding-bottom: 100%; height: 0; overflow: hidden; max-width: 100%;"><iframe src="https://embed.tidal.com/playlists/2ad14fc5-814c-4603-a13d-9008550c7d3f?layout=gridify" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 1px; min-height: 100%; margin: 0 auto;"></iframe></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import config from '../../config.js';
import navbar from '../components/atoms/Header/NavigationBar.vue';
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import carousel from '../components/organisms/Carousel/Carousel.vue';

export default {
    name: "AllOfTheLights",
    data() {
        return {
            currentCastMember: {},
            castListing: [
                {
                    name: "Tay Epps",
                    role: "Noah",
                    imgKey: "Noah.jpg",
                },
                {
                    name: "Blake Thompson",
                    role: "Hunter",
                    imgKey: "Hunter.JPG",
                },
                {
                    name: "Julia Vega",
                    role: "Lexi",
                    imgKey: "Lexi-min.jpg",
                },
                {
                    name: "Sam Gerard",
                    role: "Chelsea",
                    imgKey: "Chelsea-min.jpg",
                },
                {
                    name: "Fernando Ochoa",
                    role: "Gonzales",
                    imgKey: "Gonzales.jpg",
                },
            ],
            btsImages: [
                'Director.JPG',
                'DollarCity.JPG',
                'MissedShot.JPG',
                'FinalDay1.JPG',
                'PartyScene1.JPG',
                'SettingUpCar.JPG',
                'CarRig.JPG',
            ],
        };
    },
    mounted(){
        this.setCastSelection(0);
    },
    computed: {
        showAOTL() {
            return this.$store.state.showAOTL;
        },
    },
    components: {
        navbar,
        sectionHead,
        carousel,
    },
    methods: {
        getContent(key) {
            return this.getAPIUrl() + key;
        },
        getAPIUrl() {
            return config.currentSecurity() + config.currentEnvAPI() + '/design/';
        },
        setCastSelection(key) {
            this.currentCastMember = this.castListing[key];
        },
        evalSelection(idx) {
            let currentClass = 'castMemberButton';
            currentClass += this.currentCastMember.role == this.castListing[idx].role ? ' selected' : '';
            return currentClass;

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

.highlight {
    color: $AOTLYellow;
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
    text-align: left;
}

.poster {
    padding: 15px;
    width: 100%;
    height: auto;

    @include tablet {
        width: 68%;
    }

    @include desktop {
        width: 55%;
    }
}


.synopsis {
    padding: 20px;
    text-align: left;
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
        margin-bottom: 15px;
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

.slideshowImage {
    display: block;
}

.ssImg {
    display: block;
    width: 50%;
    height: auto;
    margin: 0 auto;

    @include tablet {
        width: 45%;
    }

    @include desktop {
        width: 38%;
    }
}

.castSelector {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 25px;
}

.castMemberButton {
    background-color: transparent;
    color: $AOTLYellow;
    padding: 10px 4px;
    border: 1px solid $AOTLYellow;
    font-size: 15px;
    outline: none;
}

.slideshowHeader {
    text-align: center;
}

.actor {
    color: $AOTLYellow;
}

.selected {
    background-color: $AOTLYellow;
    color: black;
}

.btsStatement {
    padding: 18px;
}

.btsHeader {
    color: $AOTLYellow;
    text-align: center;
}

.btsVideoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 35px;
}

.btsVideo {
    @include tablet {
        height: 600px;
        width: 600px;
    }

    @include desktop {
        height: 600px;
        width: 600px;
    }
}

.musicStatement {
    padding: 18px;

    @include desktop {
        padding: 45px 200px;
    }

    @include widescreen {
        padding: 45px 200px;
    }
}

.tidalWrapper {
    position: relative;
    padding-bottom: 100%;
    height: 350px;
    overflow: hidden;
    max-width: 100%;
}

.tidalWindow {
    top: 0;
    left: 0;
    width: 100%;
    height: 350px;
    margin: 0 auto;
}

.playlist {
    padding-bottom: 65px;
}

.commercialWrapper {
    @include tablet {
        height: 600px;
        width: 600px;
    }

    @include desktop {
        height: 100%;
        width: 100%;
    }
}

.musicPanel {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include phone{
        margin-bottom: 15px;
        grid-template-columns: 1fr;
    }

    @include tablet{
        grid-template-columns: 1fr 1fr;
    }
}
</style>