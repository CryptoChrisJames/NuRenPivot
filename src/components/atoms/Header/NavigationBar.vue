<template>
  <div class="navigationWrapper">
    <a href="/"><img src="../../../assets/logo-trans2.png" alt="" class="logo"></a>
    <i
      @click="toggleMenu()"
      :class="['fa fa-bars', isMobile, 'menu']"
    />
    <div v-if="menuOpen" class="menuScreen">
      <div class="menuScreenContent">
        <div class="menuHeaderWrapper">
          <a href="/"><img src="../../../assets/logo-trans2.png" alt="" class="logo"></a>
          <i
            @click="toggleMenu()"
            :class="['fa fa-times', isMobile, 'close']"
          >
          </i>
        </div>
        <div class="menuOptionsWrapper">
          <div class="menuOptions">
            <div class="option">
              <a href="/" class="menuOption"> HOME </a>
            </div>
            <div class="option">
              <a href="/allofthelights" class="menuOption"> ALL OF THE LIGHTS </a>
            </div>
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
export default {
  name: "NavigationBar",
  data() {
    return {
      windowWidth: window.innerWidth,
      menuOpen: false,
    };
  },
  computed: {
    mobile() {
      return this.windowWidth <= 766;
    },
    isMobile(){
      return this.mobile ? ' fa-2x ' : ' fa-3x ';
    }
  },
  async mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  methods: {
    onResize(){
      this.windowWidth = window.innerWidth;
    },
    generateMenuClass() {
      const classString = 'mobileNav';
      return classString;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/_colors.scss';
@import '../../../styles/_variables.scss';
.navigationWrapper {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
}

.logo {
  height: 48px;

  @include tablet {
    height: 40px;
  }

  @include phone {
    height: 40px;
  }
}

.menu {
  color: $AOTLYellow;
}

.menuScreen {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  z-index: 100;
}

.menuHeaderWrapper {
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 25px;
}

.menuOptionsWrapper {
  padding-top: 50px;
  color: $AOTLYellow;
}

.menuScreenContent {
  display: block;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}

.menuOption {
  font-weight: bolder;
  text-decoration: none;
}

.menuOption:hover {
  color: $AOTLDarkYellow;
}

.close {
  color: white;
  text-shadow: none;
}

.option {
  text-align: center;
  padding: 35px;
  font-size: 2rem;
  line-height: 1.4;
}

.socialWrapper {
  display: flex;
  padding: 3rem 0px;
  justify-content: center !important;
}

.social {
  padding: 0px 12px;
  font-size: 25px;
  color: $AOTLYellow;
}

.social:hover {
  color: $AOTLDarkYellow;
}
</style>