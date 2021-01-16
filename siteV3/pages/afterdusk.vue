<template>
  <div class="afterDusk">
    <div class="navbarWrapper">
        <navbar />
    </div>
    <div class="headerWrapper">
      <img :src="logo" alt="">
    </div>
    <h1>{{ logline }}</h1>
    <h1>{{ synopsis }}</h1>
  </div>
</template>

<script>
import navbar from '../components/atoms/Header/NavigationBar.vue';
export default {
  name: 'AfterDusk',
  components: { navbar },
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
.afterDusk {

}

.headerWrapper {
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
</style>
