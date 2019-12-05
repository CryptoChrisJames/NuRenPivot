<template>
  <div class="aboutContainer">
    <img src="../assets/About.jpg" class="pic">
    <div class="description">
      <section-head>About</section-head>
      <h3 class="desc">
        Nu Renaissance takes pride in offering opportunities to a diverse group of people.
        The greatest asset that Nu Renaissance provides is a great, positive and professional
        outlook on the craft of media produciton. We believe that inclusion and diversity is integral
         to our success.
      </h3>
    </div>
  </div>
</template>

<script>
import sectionHead from '../components/atoms/Header/SectionHead.vue';
export default {
  name: 'About',
  components: { sectionHead },
};
</script>

<style lang="scss" scoped>
.aboutContainer {
  padding: 25px 75px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.pic {
  width: 450px;
  height: auto;
}

.description {
  text-align: center;
}

.desc {
  padding: 25px;
}
</style>