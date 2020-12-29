<template>
    <section class="videoBg">
        <iframe ref="video" src="https://player.vimeo.com/video/440484598?background=1"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        >
        </iframe>
        <div class="videoContent">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            videoRatio: null,
        };
    },
    mounted() {
        // this.setImgUrl();
        // this.setContainerHeight();
        console.log(this.$refs.video);

        this.videoRatio = this.$refs.video.videoWidth / this.$refs.video.videoHeight;
    }
};
</script>

<style lang="scss" scoped>

</style>