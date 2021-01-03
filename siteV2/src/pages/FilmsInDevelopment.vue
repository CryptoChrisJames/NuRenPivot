<template>
  <div>
    <section-head>Films In Development</section-head>
    <div class="filmsInDevelopment">
      <div v-for="film in filmsInDevelopment" v-bind:key="film.id">
        <film-card
          class="film"
          :name="film.name"
          :posterUrl="film.url"
        >
          {{ film.desc }}
        </film-card>
      </div>
    </div>
    
  </div>
</template>

<script>
import sectionHead from '../components/atoms/Header/SectionHead.vue';
import filmCard from '../components/organisms/FilmCard/FilmCard.vue';
export default {
  name: 'Home',
  components: { sectionHead, filmCard },
  data() {
    return {
      filmsInDevelopment: [
        {
          "name": "All Of The Lights",
          "url": require('../assets/FutureWork/AlloftheLights.jpg'),
          "desc": `When an officer gets shot, a vivid guy and his provocative white 
            friend are forced to choose between risking arrest or running away.`,
        },
        {
          "name": "The Choice Is Yours",
          "url": require('../assets/FutureWork/TheChoiceisyoursmovieposter.jpg'),
          "desc": `A 29-year-old, pensive woman tries to avoid a meltdown before her 30th 
            birthday by putting the power of control over her life in the hands of strangers on social media.`,
        },
        {
          "name": "For The Clout",
          "url": require('../assets/FutureWork/for  the clout.jpg'),
          "desc": `A young, struggling business owner faces the fact that clout is worth more 
            than merit when his business and personal lives become jeopardized.`,
        },
      ]
    };
  },
};
</script>