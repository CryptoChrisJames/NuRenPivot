import poster from './Poster.vue';

export default {
    title: 'Poster',
};

export const Poster = () => ({
    components: { poster },
    data() {
        return {
            url: require('../../../assets/FutureWork/AlloftheLights.jpg'),
        };
    },
    template: `
        <div style="height: 400px; width: auto;">
            <poster :url="url"></poster>
        </div>
    `,
})