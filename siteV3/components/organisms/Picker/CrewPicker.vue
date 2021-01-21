<template>
    <div class="pickerWrapper">
        <ul class="crewPicker">
            <li v-for="(item, index) in Objs" :key="index" :class="['crewPosition', index == currentIndex ? 'selected' : '']">
                <a @click="setIndex(index)">
                    {{ item.position }}
                </a>
            </li>
        </ul>
        <div v-for="(item, index) in Objs" :key="index" class="crewPanel" :hidden="index != currentIndex">
            <h2 class="crewName">{{ item.name }}</h2>
            <img :src="item.headshot" alt="" class="crewPhoto">
            <p class="crewBio">{{ item.bio }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CrewPicker",
    data() {
        const Objs = [];
        const currentIndex = 0;
        return {
            Objs,
            currentIndex,
        };
    },
    props: {
        prismicObjs: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        currentObj() {
            return this.Objs[this.currentIndex];
        }
    },
    mounted() {
        this.Objs = this.prismicObjs.map((obj) => {
            return {
                'position': obj.position[0].text,
                'name': obj.name[0].text,
                'bio': obj.bio[0].text,
                'headshot': obj.headshot.url,
            };
        });
    },
    methods: {
        setIndex(index) {
            this.currentIndex = index;
        },
    },
};
</script>

<style lang="scss" scoped>
.crewPicker {
    list-style-type: none;
    margin: 7px 0;
    padding: 10px 0;
    overflow-x: scroll;
    white-space: nowrap;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    display: block;

    @include tablet {
        width: 75%;
        margin: 0 auto;
    }

    @include desktop {
        width: 50%;
        margin: 0 auto;
    }

    @include widescreen {
        width: 50%;
        margin: 0 auto;
    }
}

.crewPicker::-webkit-scrollbar {
  display: none;
}

.crewPosition {
    font-size: 25px;
    font-weight: bold;
    display: inline-block;
    padding: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    cursor: pointer;
}

.crewName {
    color: $ADRed;
    font-size: 40px;
    text-align: center;
    padding: 10px;
}

.crewPhoto {
    width: 85%;
    height: auto;
    display: block;
    margin: 0 auto;
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
    filter: grayscale(1);

    @include tablet {
        width: 60%;
    }

    @include desktop {
        width: 50%;
    }

    @include widescreen {
        width: 25%;
    }
}

.crewBio {
    font-size: 20px;
    display: block;
    margin: 0 auto;
    padding: 35px;

    @include tablet {
        font-size: 30px;
    }

    @include desktop {
        font-size: 35px;
    }

    @include widescreen {
        font-size: 35px;
        padding: 20px 300px;
    }
}

.selected {
  border-bottom: 1px solid $ADRed;
  border-top: 1px solid $ADRed;
  color: $ADYellow;
}
</style>