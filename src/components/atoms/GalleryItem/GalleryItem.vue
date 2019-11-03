<template>
    <div 
        class="card"
        :class="isLoading ? 'loading' : ''" 
    >
        <div class="img__box">
            <img :src="videoThumbnail">
        </div>
        <div class="detail__box">
            <span>{{ videoName }}</span>
            <span>{{ videoDescription }}</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import config from '../../../../config.js';
export default {
    name: 'GalleryItem',
    props: {
        videoName: {
            type: String,
            default: '',
        }
    },
    data() {
        return {
            video: {},
            isLoading: false,
        };
    },
    computed: {
        videoThumbnail() {
            return this.video.thumbnail;
        },
        videoDescription() {
            return this.video.description;
        },
    },
    async mounted() {
        this.isLoading = true;
        const videoObject = await axios.get('http://'
            + config.currentEnvAPI()
            + '/project/thumbnails/'
            + this.videoName);
        this.video = videoObject.data;
        this.isLoading = false;
    },
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    width: 500px;
}

.img__box {
    display: block;
    width: 100% ;
    overflow: hidden;
    padding: 0;
    margin: 0;

    img {
        max-width: 100%;
        transition: transform 1.4s;

        &:hover {
            transform: scale(1.2);
        }
    }
}

.detail__box {
    width: 80%;
    height: 80%;
    position: absolute;
    top: 0;
    z-index: 10;
    background: rgba($color: #000000, $alpha: .35);
    transition: transform 1.4s;
    padding: 0;
    margin: 0;
}

.loading {
  overflow: hidden;
  position: relative;
}
.loading::before, .loading::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  border: 2px solid transparent;
  width: 0;
  height: 0;
}
.loading::before {
  top: 0;
  left: 0;
  border-top-color: #cf3030;
  border-right-color: #cf3030;
  animation: border 1s infinite;
}
.loading::after {
  bottom: 0;
  right: 0;
  animation: border 1s 0.5s infinite, borderColor 1s 0.5s infinite;
}

@keyframes border {
  0% {
    width: 0;
    height: 0;
  }
  25% {
    width: 100%;
    height: 0;
  }
  50% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}
@keyframes borderColor {
  0% {
    border-bottom-color: #cf3030;
    border-left-color: #cf3030;
  }
  50% {
    border-bottom-color: #cf3030;
    border-left-color: #cf3030;
  }
  51% {
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
  100% {
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
}

</style>