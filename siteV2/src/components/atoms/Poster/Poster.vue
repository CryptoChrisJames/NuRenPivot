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
    padding: 20px 0;
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
}
</style>