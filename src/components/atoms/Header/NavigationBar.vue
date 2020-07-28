<template>
  <div :class="setNavType()">
    <div class="logoWrapper">
      <img src="../../../assets/logo-trans2.png" alt="" class="logo">
    </div>
    <div class="menuButtonWrapper">
      <i :class="isMobile"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    navCover: {
        type: Boolean,
        default: false,
    },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    mobile() {
      return this.windowWidth <= 766;
    },
    isMobile(){
      return this.mobile ? 'fa fa-bars fa-2x menu' : 'fa fa-bars fa-4x menu';
    }
  },
  async mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  methods: {
    setNavType() {
      var navType = ['navigationWrapper'];
      if (this.navCover) {
        navType.push('navigationWrapper--cover');
      } else {
        navType.push('navigationWrapper--top');
      }
      return navType;
    },
    onResize(){
      this.windowWidth = window.innerWidth;
    },
    generateMenuClass() {
      const classString = 'mobileNav';
      return classString;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/_colors.scss';
@import '../../../styles/_variables.scss';
.navigationWrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  z-index: 20;
}

.navigationWrapper--cover {
  position: absolute;
}

.navigationWrapper--top {
  position: none;
}

.logo {
  width: 250px;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -15%);
  margin: 60px 0;

  @include tablet {
    width: 175px;
    top: 0;
    left: 0;
    transform: none;
    margin: 35px 0;
  }

  @include phone {
    width: 125px;
    top: 0;
    left: 0;
    transform: none;
    margin: 35px 0;
  }
}

.menuButtonWrapper {
  margin: 0 25px;

  @include tablet {
    margin: 0 35px;
  }
}

.menu {
  color: $AOTLYellow;
}
</style>