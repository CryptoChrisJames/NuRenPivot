<template>
    <div class="images">
        <h1><b>Films In Development</b></h1>
        <h4 style="width: 75%; margin: 0 auto; padding-bottom: 15px;">We are currently looking for investors and 
            co-production partners. You can contact us<a href="#/contact"> here.</a></h4>
        <div>
            <h4>The Light</h4>
            <h6>(Feature Film)</h6>
            <h6>Dramedy</h6>
            <img class="picture" src="../assets/FutureWork/TheLight.jpg"/>
            <p>When an officer gets shot, a vivid guy and his provocative white friend are forced to choose between risking arrest or running away.</p>
        </div>
        <div >
            <h4>The Choice Is Yours</h4>
            <h6>(Feature Film)</h6>
            <h6>Comedy</h6>
            <img class="picture" src="../assets/FutureWork/TheChoiceisyoursmovieposter.jpg"/>
            <p>A 29-year-old, pensive woman tries to avoid a meltdown before her 30th birthday by putting the power of control over her life in the hands of strangers on social media.</p>
        </div>
        <div>
            <h4>For The Clout</h4>
            <h6>(Feature Film)</h6>
            <h6>Dramedy</h6>
            <img class="picture" src="../assets/FutureWork/for  the clout.jpg"/>
            <p>A young, struggling business owner faces the fact that clout is worth more than merit when his business and personal lives become jeopardized.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.picture{
    width:100%;
    margin-bottom: 12px;
}

p{
    margin-bottom: 2em;
}

@media only screen and (min-width: 700px) {
  p,h4,h5{
      font-size: 3em;
  }

  .picture{
      width: 75%;
  }
}


@media only screen and (min-width: 1020px) {
  h4,h5{
      font-size: 1.9em;
  }

  p{
      font-size: 1em;
      width:50%;
      margin: 0 auto;
      margin-bottom: 50px;
  }

  .picture{
      width: 33%;
  }
}
</style>
