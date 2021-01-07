<template>
  <div class="afterDusk">
    <div class="navbarWrapper">
        <navbar />
    </div>
    <div class="headerWrapper">
      <img src="../assets/AfterDuskLogo.png" alt="">
    </div>
  </div>
</template>

<script>
import navbar from '../components/atoms/Header/NavigationBar.vue';
export default {
  name: 'AfterDusk',
  components: { navbar },
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
