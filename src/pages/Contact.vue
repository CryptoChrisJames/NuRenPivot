<template>
    <div class="content">
        <div class="inputField">
            <h3 class="inputTitle">First Name</h3>
            <input v-model="firstName" type="text"/>
            <h3 class="inputTitle">Last Name</h3>
            <input v-model="lastName" type="text"/>
            <h3 class="inputTitle">Email*</h3>
            <input v-model="email" type="text"/>
            <h3 class="inputTitle">Comments*</h3>
            <textarea v-model="comments" />
            <h3 v-if="submitted" class="inputTitle">Thanks for contacting us! We will review your submission and respond to you soon.</h3>
            <button @click="submit" class="submit">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    'name': 'Contact',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            comments: '',
            submitted: false,
        };
    },
    methods: {
        submit() {
            if(this.email
                && this.comments) {
                const contact = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    comments: this.comments,
                };
                this.$store.dispatch("submitContact", contact);
                this.submitted = true;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';
@import '../styles/_variables.scss';

.content {
    margin: 0 33%;

    @include tablet {
        margin: 0 25%;
    }
    
    @include phone {
        margin: 0 15%;
    }

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