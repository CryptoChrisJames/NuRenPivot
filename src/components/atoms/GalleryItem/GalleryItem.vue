<template>
    <div class="container">
        <div class="card">
            <div class="img__box">
                <img :src="galleryImage">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GalleryItem',
    props: {
        galleryImage: {
            type: String, 
            required: true,
        },
        // videoTitle: {
        //     type: String, 
        //     required: true,
        // },
        // description: {
        //     type: String, 
        //     required: true,
        // },
        // videoKey: {
        //     type: String, 
        //     required: true,
        // },
    }
}
</script>

<style scoped>

</style>