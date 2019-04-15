<template>
    <div>
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
            videos: this.$store.state.videos
        }
    }
}
</script>

<style scoped>
.video{
    width: 100%;
    border: none;
}

.title{
    padding-top: 30px;
}

@media only screen and (min-width: 760px) {
  .video{
      height: 350px;
  }

  p{
      font-size: 1.5em;
  }
}
</style>
