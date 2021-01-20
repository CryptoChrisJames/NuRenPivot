<template>
  <div class="afterDusk">
    <hero :videoLink="heroLink">
      <div class="logoWrapper">
        <img class="logo" :src="logo" alt="After Dusk logo.">
      </div>
    </hero>
    <section class="AfterDuskContent">      
      <!-- Film -->
      <h1 class="logline">{{ logline }}</h1>
      <!-- Poster -->
      <section-head>Synopsis</section-head>
      <h1 class="synopsis">{{ synopsis }}</h1>
      <!-- Director's Statement -->
      <!-- Cast -->
      <section-head>Crew</section-head>
      <crew-picker :prismicObjs="crewData"></crew-picker>
    </section>
  </div>
</template>

<script>
import Hero from '../components/organisms/Hero/Hero.vue';
import SectionHead from '../components/atoms/Header/SectionHead.vue';
import CrewPicker from '../components/organisms/Picker/CrewPicker.vue';
export default {
  name: 'AfterDusk',
  components: { Hero, SectionHead, CrewPicker },
  computed: {
    logo() {
      return this.document.logo.url;
    },
    logline() {
      return this.document.logline[0].text;
    },
    synopsis() {
      return this.document.synopsis[0].text;
    },
    heroLink() {
      return this.document.herolink.url;
    },
    crewData() {
      return this.document.crewatl;
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('after_dusk')).data;
      return {
        document,
      }
    } catch (e) {
        error({ statusCode: 404, message: 'Page Not Found' });
    }
  },
};
</script>

<style lang="scss" scoped>
.AfterDuskContent {
  padding: 25px;
}

.logline {
  font-size: 28px;
  text-align: center;
  color: $ADRed;
}

.logoWrapper {
  width: 100%;
  height: 90%;
}

.logo {
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 85%;
  height: auto;
}

.headerWrapper {
    height: 100%;
    width: 100%;
}

.navbarWrapper {
    position: relative;
    width: 100%;
    margin-bottom: 0;

    @include widescreen {
        padding-left: 80px;
        padding-right: 80px;
    }
}

.synopsis {
  font-size: 20px;
  margin: 35px 0;
}
</style>
