import galleryItem from './GalleryItem.vue';

export default {
    title: 'Gallery Item',
};

export const GalleryItem = () => ({
    components: { galleryItem },
    computed: {
        image() {
            return 'UPDATED_2019_REEL_1080.mp4';
        }
    },
    template: `
        <gallery-item
            :videoName="image"
        ></gallery-item>
    `,
})