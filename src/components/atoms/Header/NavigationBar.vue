<template>
  <div class="navigation">
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
.navigation {
  position: absolute;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 20;
}

.logo {
  position: absolute;
  width: 250px;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -15%);
  margin: 60px 0;

  @include phone {
    width: 125px;
    top: 0;
    left: 0;
    transform: none;
    margin: 35px 0;
  }
}

.menu {
  color: $AOTLYellow;
  position: absolute;
  top: 50%;
  left: 95%;
  transform: translate(-50%, -50%);
  margin: 90px 0;

  @include phone {
    top: 50%;
    left: 70%;
    transform: none;
    margin: 43px 0;
  }
}
</style>