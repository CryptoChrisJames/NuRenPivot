import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

const state = {
  videoList: [],
  videoObjects: [],
  loadingData: false,
  currentVideo: null,
  currentGallery: [],
  videoContentObjs: [],
  showAOTL: true,
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
