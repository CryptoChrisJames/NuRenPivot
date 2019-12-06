<template>
    <div class="content">
        <div class="inputField">
            <h3 class="inputTitle">First Name</h3>
            <input type="text"/>
            <h3 class="inputTitle">Last Name</h3>
            <input type="text"/>
            <h3 class="inputTitle">Email</h3>
            <input type="text"/>
            <h3 class="inputTitle">Comments</h3>
            <textarea />
            <input type="submit" />
        </div>
    </div>
</template>

<script>
export default {
    'name': 'Contact',
};
</script>

<style lang="scss" scoped>
.content {
    margin: 0 33%;

    h1 {
        text-align: center;
    }
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
        h1{
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
}
</style>