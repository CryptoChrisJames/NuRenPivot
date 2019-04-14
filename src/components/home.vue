<template>
    <div>
        <h1 class="title">Newest Release</h1>
        <iframe class="feature" v-bind:src="featurefilm"></iframe>
        <div>            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            featurefilm: this.$store.state.featurefilm
        }
    }
}
</script>

<style scoped>
.feature{
    width: 90%;
    height: auto;
    margin: 20px 0 20px 0;
}

.title{
    padding-top: 30px;
}
</style>
