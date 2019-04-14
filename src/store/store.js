import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        videos:[
            { name: "The 'L' Word", link:"https://www.youtube.com/watch?v=ytJOKMdWgzU"},
            { name: "I'm In Your Body", link:"https://www.youtube.com/watch?v=Rb2Z271fuuA"},
            { name: "Good Vibes Music Video", link:"https://www.youtube.com/watch?v=4jABhS5gkVk"},
            { name: "Arreic Summer Soul Funk Jam", link:"https://www.youtube.com/watch?v=33c-dTbLU6U"},
            { name: "Nefi Promo Video", link:"https://www.youtube.com/watch?v=4nhfKVNGj1A"}
        ],
        featurefilm: "https://www.youtube.com/watch?v=74w5w8Hib6c"
    }
})