<template>
    <div class="content">
        <section-head>Let's Connect</section-head>
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
import sectionHead from '../components/atoms/Header/SectionHead.vue';

export default {
    'name': 'Contact',
    components: {
        sectionHead,
    },
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
                this.firstName = '';
                this.lastName = '';
                this.email = '';
                this.comments = '';
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
    font-family: 'Montserrat', sans-serif;
    margin: 0 33%;

    @include tablet {
        margin: 0 25%;
    }

    @include phone {
        margin: 0 15%;
    }

    button {
        background-color: black;
        color: $AOTLYellow;
        width:100%;
        box-shadow: none;
        border: 1px solid $AOTLYellow;
        border-radius: 25px;
        outline: none;
        margin-bottom: 3em;
        transition: 0.5s ease;
    }

    button:hover{
        background-color: $AOTLYellow;
        color: black;
    }

    input {
        color: lightgray;
        margin: 5px;
        width:100%;
        box-shadow: none;
        background-color: transparent;
        border: 1px solid lightgray;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        margin-bottom: 3em;
        outline: none;
    }

    textarea {
        color: lightgray;
        width:100%;
        height: 155px;
        box-shadow: none;
        background-color: transparent;
        border: 1px solid lightgray;
        border-radius: 25px;
        outline: none;
        margin-bottom: 3em;
    }

    @media only screen and (min-width: 700px) {
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