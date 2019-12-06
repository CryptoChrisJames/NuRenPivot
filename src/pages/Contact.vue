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
            <button class="submit">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    'name': 'Contact',
};
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

.content {
    margin: 0 33%;

    h1 {
        text-align: center;
    }
    button {
        width:100%;
        box-shadow: none;
        border: 1px solid black;
        border-radius: 25px;
        outline: none;
        margin-bottom: 3em;
    }    
    button:hover{
        background-color: lightgrey;
    }
    input {
        margin: 5px;
        width:100%;
        box-shadow: none;
        border: 1px solid black;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        margin-bottom: 3em;
        outline: none;
    }
    textarea {
        width:100%;
        height: 155px;
        box-shadow: none;
        border: 1px solid black;
        border-radius: 25px;
        outline: none;
        margin-bottom: 3em;
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