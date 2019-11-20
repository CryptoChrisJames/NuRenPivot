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
    max-height: 450px;
}
</style>