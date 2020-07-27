<template>
  <div class="content">
    <section-head>About Us</section-head>
    <div class="aboutContainer">
      <div class="description">
        <h3 class="desc">
          Nu Renaissance takes pride in offering opportunities to a diverse group of people.
          The greatest asset that Nu Renaissance provides is a great, positive and professional
          outlook on the craft of media produciton. We believe that inclusion and diversity is integral
          to our success.
        </h3>
        <section-head>The Team</section-head>
        <div class="teamMemeberWrapper">
          <div class="teamMember">
            <h5></h5>
            <div class="teamMemeberGif">
              <img src="../assets/Chan.gif" class="gif">
            </div>
            <div class="position"><h6></h6></div>
          </div>
        </div>
        <div class="teamMemeberWrapper">
          <h5></h5>
          <div class="teamMember">
            <div class="teamMemeberGif">
              <img src="../assets/Chan.gif" class="gif">
            </div>
            <div class="position"><h6></h6></div>
          </div>
        </div>
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

.gif {
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
  text-align: justify;
}

.desc {
  font-size: 18px;
  padding: 25px;
  justify-content: left;
  font-family: 'Montserrat', sans-serif;
}
</style>