<template>
  <div class="content">
    <!-- <div
      v-show="env !== 'prod'"
      id="env-info"
    >
      <h2
        style="text-align: center"
      >
        {{ env }}
      </h2>
    </div> -->
    <Nuxt />
    <div class="footer">
      <div class="contentWrapper">
        <div class="copyrightWrapper">
          <div class="copyright">
            <a href="/"><img src="../assets/logo-trans2.png" alt="" class="logo"></a>
            <span>© Nu Renaissance 2020, All Rights Reserved.</span>
          </div>
        </div>
        <div class="socialWrapper">
          <a href="https://www.facebook.com/AOTLShort"><i class="social fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/nu_ren_productions/"><i class="social fab fa-instagram"></i></a>
          <a href="https://vimeo.com/chandonae"><i class="social fab fa-vimeo-v"></i></a>
          <a href="https://www.youtube.com/channel/UCbMEhrBBQ4jTiC7R3RwSMWA"><i class="social fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../config.js';
import apiUrlGenerator from '~/helpers/apiUrlGenerator';

export default {
  name: 'app',
  computed: {
    env() {
      return config.currentEnv();
    },
  },
  methods: {
    getContent(content) {
      return apiUrlGenerator.getContent(content);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-family: 'Open Sans Condensed', sans-serif;
}

.footer {
  padding-top: 44px;
}

.copyright {
  text-align: center;
}

.logo {
  padding-right: 15px;
  height: 48px;

  @include tablet {
    height: 40px;
  }

  @include phone {
    height: 40px;
  }
}

.socialWrapper {
  display: flex;
  padding: 3rem 0px;
  justify-content: center !important;
}

.social {
  padding: 0px 25px;
  font-size: 25px;
  color: $AOTLYellow;
}

.social:hover {
  color: $AOTLDarkYellow;
}

.contentWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include phone{
      grid-template-columns: 1fr;
  }

  @include tablet{
      grid-template-columns: 1fr;
  }
}

.contentWrapper {
  align-items: center;
}
</style>