<template>
    <img :src="url" class="poster">
</template>

<script>
export default {
    name: 'Poster',
    props: {
        url: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.poster {
    display: block;
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
}
</style>