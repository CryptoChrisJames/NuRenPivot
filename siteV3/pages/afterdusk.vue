<template>
  <div class="afterDusk">
    <hero :videoLink="heroLink">
      <div class="logoWrapper">
        <img class="logo" :src="logo" alt="After Dusk logo.">
      </div>
    </hero>
    <section class="AfterDuskContent">      
      <div class="socialWrapper">
        <a href="https://www.facebook.com/AfterDuskShort" target="_blank" rel="noopener noreferrer"><i class="social fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/afterduskshort/" target="_blank" rel="noopener noreferrer"><i class="social fab fa-instagram"></i></a>
        <a href="https://twitter.com/AfterDuskShort" target="_blank" rel="noopener noreferrer"><i class="social fab fa-twitter"></i></a>
        <a href="https://www.tiktok.com/@afterduskshort?lang=en" target="_blank" rel="noopener noreferrer"><i class="social fab fa-tiktok"></i></a>
      </div>
      <div v-show="showCrowdfunding" class="crowdfunding">
        <p class="cta">
          We're currently accepting donations to help fund our vision. 
          We're offering awesome perks to top donors!
        </p>
        <a href="https://www.facebook.com/AfterDuskShort" target="_blank" rel="noopener noreferrer" class="donate">
          Click Here To Donate!
        </a>
      </div>
      <!-- Film -->
      <section-head>Logline</section-head>
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
    },    
    showCrowdfunding() {
      return this.document.flagcrowdfund;
    },
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

    @include desktop {
        font-size: 30px;
        padding: 0 50px;
    }
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

  @include tablet {
      width: 75%;
  }

  @include desktop {
    width: 50%;
  }

  @include widescreen {
    width: 50%;
  }
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

.cta {
  font-size: 23px;
  text-align: center;
}

.donate {
  color: $ADYellow;
  border: 2px solid $ADYellow;
  width: 100%;
  padding: 8px 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  border-radius: 3px;
  margin: 25px 0;
  transition: 300ms ease;

  @include desktop {
      width: 70%;
      display: block;
      margin: 0 auto;
      padding: 25px 0;
  }

  @include widescreen {
      width: 50%;
      display: block;
      margin: 0 auto;
      padding: 25px 0;
  }
}

.donate:hover {
  color: black;
  background-color: $ADYellow;
}

.synopsis {
  font-size: 20px;
  margin: 35px 0;

    @include tablet {
        font-size: 25px;
    }

    @include desktop {
        font-size: 30px;
        padding: 0 50px;
    }

    @include widescreen {
        font-size: 30px;
        padding: 0 300px;
    }
}

.socialWrapper {
  display: flex;
  padding: 2rem 0px;
  justify-content: center !important;
}

.social {
  padding: 0px 22px;
  font-size: 35px;
  color: $ADRed;

  @include tablet {
    padding: 0 30px;
  }
}

.social:hover {
  color: $ADRed;
}
</style>
