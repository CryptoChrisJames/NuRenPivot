import galleryItem from './GalleryItem.vue';

export default {
    title: 'Gallery Item',
};

export const GalleryItem = () => ({
    components: { galleryItem },
    computed: {
        image() {
            return 'https://via.placeholder.com/150/92c952';
        }
    },
    template: `
        <gallery-item
            :galleryImage="image"
        ></gallery-item>
    `,
})