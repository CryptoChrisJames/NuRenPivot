<template>
    <div>
        <form>
            <h3>First Name</h3>
            <input type="text" />
            <h3>Last Name</h3>
            <input type="text"/>
            <h3>Email</h3>
            <input type="text"/>
            <h3>Comments</h3>
            <textarea />
            <input class="submit" type="submit" />
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
input{
    width:100%;
    box-shadow: none;
    border: 1px solid black;
    margin-bottom: 3em;
    border-radius: 25px;
}

textarea{
    width:100%;
    box-shadow: none;
    border: 1px solid black;
    margin-bottom: 3em;
    border-radius: 10px;
}

.submit:hover{
    background-color: white;
}

@media only screen and (min-width: 700px) {
  h3{
      float: left;
      margin-left: 50px;
  }

  form{
      width: 75%;
      margin: 0 auto;
  }
}


@media only screen and (min-width: 1020px) {
  form{
      width: 50%;
      margin: 0 auto;
  }
}
</style>
