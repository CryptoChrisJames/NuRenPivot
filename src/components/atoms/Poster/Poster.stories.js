import poster from './Poster.vue';

export default {
    title: 'Poster',
};

export const Poster = () => ({
    components: { poster },
    data() {
        return {
            url: require('../../../assets/FutureWork/TheLight.jpg'),
        };
    },
    template: `
        <poster :url="url"></poster>
    `,
})