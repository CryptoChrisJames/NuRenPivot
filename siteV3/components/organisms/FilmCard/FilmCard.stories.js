import filmCard from './FilmCard.vue';

export default {
    title: 'Film Card',
};

export const FilmCard = () => ({
    components: { filmCard },
    data() {
        return {
          posterUrl: require('../../../assets/FutureWork/AlloftheLights.jpg'),
          name: 'All Of The Lights',
        };
    },
    template: `
        <film-card
          :posterUrl="posterUrl"
          :name="name"
        >
          When an officer gets shot, a vivid guy and his provocative white friend are 
          forced to choose between risking arrest or running away.
        </film-card>
    `,
})