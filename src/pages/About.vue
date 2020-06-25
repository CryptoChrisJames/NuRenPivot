<template>
  <div class="content">
    <section-head>About</section-head>
    <div class="aboutContainer">
      <img src="../assets/Chan.gif" class="pic">
      <div class="description">
        <h3 class="desc">
          Nu Renaissance takes pride in offering opportunities to a diverse group of people.
          The greatest asset that Nu Renaissance provides is a great, positive and professional
          outlook on the craft of media produciton. We believe that inclusion and diversity is integral
          to our success.
        </h3>
      </div>
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
@import '../styles/_variables.scss';
.content {
  @media (min-width: 494px) and (max-width: 765px) {
    display: block;
    margin: 0 auto;
  }
}
.aboutContainer {
  padding: 25px 75px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include tablet {
    grid-template-columns: 1fr;
  }
  @media (min-width: 494px) and (max-width: 765px) {
    margin: 35px;
  }

  @include phone {
    grid-template-columns: 1fr;
    padding: 0;
  }
}

.pic {
  margin: 0 auto;
  width: 500px;
  height: auto;

  @include tablet {
    display: block;
    margin: 0 auto;
    width: 550px;
    height: auto;
  }
  @media (min-width: 494px) and (max-width: 765px) {
    display: block;
    margin: 0 auto;
    width: 550px;
    height: auto;
  }

  @include phone {
    display: block;
    margin: 0 auto;
    width: 350px;
    height: auto;
  }
}

.description {
  text-align: center;
}

.desc {
  padding: 25px;
}
</style>