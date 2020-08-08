<template>
  <div class="navigationWrapper">
    <a href="/"><img src="../../../assets/logo-trans2.png" alt="" class="logo"></a>
    <i
      @click="toggleMenu()"
      :class="['fa fa-bars', isMobile, 'menu']"
    />
    <div v-if="menuOpen" class="menuScreen">
      <i
        @click="toggleMenu()"
        :class="['fa fa-times', isMobile, 'close']"
      >
      </i>
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
      return this.mobile ? ' fa-2x ' : ' fa-3x';
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

.closeWrapper {
  height: 77px;
  width: 100%;
}

.close {
  width: 100%;
  color: white;
  padding-top: 77px;
  display: flex;
  justify-content: center !important;
}
</style>