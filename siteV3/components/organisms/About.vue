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
        <div class="teamSecion">
          <div class="teamMemeberWrapper">
            <div class="teamMember">
              <h5>Chandonae Baskin</h5>
              <div class="teamMemeberGif">
                <img src="../../assets/Chan.gif" class="gif">
              </div>
              <div class="position"><h6> Director | Producer | Cinematographer | Writer</h6></div>
            </div>
          </div>
          <div class="teamMemeberWrapper">
            <h5>Christopher James Smith</h5>
            <div class="teamMember">
              <div class="teamMemeberGif">
                <img src="../../assets/Chris.gif" class="gif">
              </div>
              <div class="position"><h6>Assistant Producer | Project Manager | DIT |<br /> Music Producer | Web Developer</h6></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sectionHead from '../atoms/Header/SectionHead.vue';
export default {
  name: 'About',
  components: { sectionHead },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 35px;
  width: 100%;
  @media (min-width: 494px) and (max-width: 765px) {
    display: block;
    margin: 0 auto;
  }
}

.aboutContainer {
  width: 100%;
  position: relative;
}

.teamSecion {
  display: grid;
  padding: 0 200px;
  grid-template-columns: 1fr 1fr;

  @include widescreen {
    padding: 0;
  }

  @include desktop {
    padding: 0;
  }

  @include tablet {
    padding: 0;
    grid-template-columns: 1fr;
  }

  @include phone {
    padding: 0;
    grid-template-columns: 1fr;
  }
}
.teamMemeberWrapper {
  margin: 20px;
  padding: 8px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;

  h5 {
    padding: 5px;
  }
}

.teamMemeberGif {
  display: inline-block;
}

.gif {
  width: 275px;
  margin: 15px auto;

  @include desktop {
    width: 300px;
  }

  @include widescreen {
    width: 300px;
  }
}

.description {
  text-align: justify;
}

.desc {
  font-size: 18px;
  padding: 25px;
  text-align: left;
  font-family: 'Montserrat', sans-serif;

  @include tablet {
    padding: 45px;
  }

  @include desktop {
    padding: 45px 25% 45px 25%;
  }

  @include widescreen {
    padding: 45px 25% 45px 25%;
  }
}

.position {
  @include desktop {
    padding: 0 100px;
  }

  @include widescreen {
    padding: 0 100px;
  }
}
</style>