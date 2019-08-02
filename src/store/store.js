import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        videos:[
            { 
                name: "Whole Lotta - Aric Wolf", 
                link: "https://www.youtube.com/embed/-udaSuPen-I",
                msg: ""
            },
            { 
                name: "2019 Demo Reel", 
                link: "https://www.youtube.com/embed/tZbIU7OLvEc",
                msg: ""
            },
            { 
                name: "The 'L' Word", 
                link: "https://www.youtube.com/embed/ytJOKMdWgzU",
                msg: "A broken couple decides to try therapy for the first time, and a troubled woman is forced to make a confession when her partner doesn't show."
            },
            { 
                name: "I'm In Your Body (Improv)", 
                link: "https://www.youtube.com/embed/Rb2Z271fuuA",
                msg: ""
            },
            { 
                name: "Good Vibes Music Video", 
                link: "https://www.youtube.com/embed/4jABhS5gkVk",
                msg: ""
            },
            { 
                name: "Arreic Summer Soul Funk Jam", 
                link: "https://www.youtube.com/embed/33c-dTbLU6U",
                msg: ""
            },
            { 
                name: "I'm Feeling Myself", 
                link:"https://www.youtube.com/embed/5Z93P45iiOo",
                msg: "A confident woman calls up her boy toy on a stormy night to have some fun."
            },
            { 
                name: "I'm a Filmmaker", 
                link: "https://www.youtube.com/embed/XktIAd_Xg9g",
                msg: ""
            }
        ]
    }
});