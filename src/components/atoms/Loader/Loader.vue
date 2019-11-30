<template>
  <div class="loader-wrapper">
    <img src="../../../assets/Spinner-1.1s-311px.svg" class="loader">
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  width: 100%;

  img {
    display: table;
    margin: 0 auto;
  }
}
</style>