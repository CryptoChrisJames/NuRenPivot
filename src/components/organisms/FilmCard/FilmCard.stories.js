import filmCard from './FilmCard.vue';

export default {
    title: 'Film Card',
};

export const FilmCard = () => ({
    components: { filmCard },
    data() {
        return {
        };
    },
    template: `
        <film-card></film-card>
    `,
})