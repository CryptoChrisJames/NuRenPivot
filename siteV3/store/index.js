import config from '../config';
import axios from 'axios';
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const apiUrl = config.currentSecurity() + config.currentEnvAPI();

const projectsRoute = "/project/";
const contentRoute = "/content/";
const showAOTLRoute = "/switch/AOTL";

const store = () => {
  return new Vuex.Store({
    state: () => ({
      videoList: [],
      videoObjects: [],
      currentVideo: null,
      currentGallery: [],
      videoContentObjs: [],
      showAOTL: true,
    }),
    mutations: {      
      addVideoListToStore(state, videoPayload) {
        state.videoList = videoPayload.keys;
        state.videoObjects = videoPayload.videoObjects;
        state.currentGallery = state.videoList;
      },
      
      setCurrentVideo(state, videoId) {
        state.currentVideo = state.videoContentObjs.find(vid => vid._id === videoId);
      },
      
      resetGallery(state) {
        state.currentGallery = state.videoList;
      },
      
      resetCurrentVideo(state) {
        state.currentVideo = null;
      },  

      analyzeList(state) {
        state.currentGallery = state.videoList;
        if(state.currentVideo) {
          state.currentGallery
            .splice(state.currentGallery
              .indexOf(state.currentGallery
                .find(duplicate =>
                  duplicate === state.currentVideo )), 1);
        }
      },  

      addVideoContentToStore(state, videoContent) {
        state.videoContentObjs = videoContent;
      },  

      setShowAOTL(state, showAOTL) {
        state.showAOTL = showAOTL;
      },
    },
    
    actions: {      
      async getVideoListandObjects ({commit}) {
        const videoKeysUrl = apiUrl + projectsRoute + "videos";
        const keys = await axios.get(videoKeysUrl);
        const videoObjectUrls = keys.data.map(key => {
          return apiUrl + projectsRoute + `thumbnails/${key}`;
        });
        const videoObjects = await Promise.all(videoObjectUrls.map( async video => {
          const response = await axios.get(video);
          return response.data;
        }));
        const videoPayload = {
          keys: keys.data,
          videoObjects: videoObjects,
        } 
        commit("addVideoListToStore", videoPayload );
      },  
      // eslint-disable-next-line
      async submitContact({commit}, payload) {
        const commentsUrl = apiUrl + "/comment";
        await axios.post(commentsUrl, {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          comments: payload.comments,
        })
      },  
      async getVideoContent({commit}) {
        const contentUrl = apiUrl + contentRoute;
        const videoContent = await axios.get(contentUrl);
        commit("addVideoContentToStore", videoContent.data);
      },
      
      async getAOTLSwitch ({commit}) {
        const showAOTL = apiUrl + showAOTLRoute;
        const result = await axios.get(showAOTL);
        commit("setShowAOTL", result.data);
      },
    }
  });
};

export default store;