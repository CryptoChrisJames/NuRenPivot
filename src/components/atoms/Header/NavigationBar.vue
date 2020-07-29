<template>
  <div class="navigationWrapper">
    <img src="../../../assets/logo-trans2.png" alt="" class="logo">
    <i :class="isMobile"></i>
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
      return this.mobile ? 'fa fa-bars fa-2x menu' : 'fa fa-bars fa-3x menu';
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
</style>