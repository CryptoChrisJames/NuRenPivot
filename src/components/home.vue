<template>
    <div>
        <h3>2019 Demo Reel</h3>
        <iframe class="feature" v-bind:src="featurefilm"></iframe>
        <div class="homecontent">           
            <div v-for="video in videos" v-bind:key="video.id">
                <h4>{{ video.name }}</h4>
                <iframe class="video" v-bind:src="video.link"></iframe>
                <p>{{ video.msg }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            featurefilm: this.$store.state.featurefilm,
            videos: this.$store.state.videos
        }
    }
}
</script>

<style scoped>
.feature{
    width: 100%;
    height: 325px;
    margin: 20px 0 20px 0;
    border: none;
    margin-bottom:63px;
}

.title{
    padding-top: 30px;
}
</style>
