import config from '../../config.js';
import axios from 'axios';


const apiUrl = 'http://' + config.currentEnvAPI();

const projectsRoute = "/project/";

const getVideoListandObjects = async ({commit}) => {
  const videoKeysUrl = apiUrl + projectsRoute + "videos";
  const keys = await axios.get(videoKeysUrl);
  const videoObjectUrls = [];
  for (let i = 0; i < keys.data.length; i ++) {
    videoObjectUrls.push(apiUrl + projectsRoute + `thumbnails/${keys.data[i]}`)
  }
  const videoObjects = [];
  for (let i = 0; i < videoObjectUrls.length; i ++) {
    const obj = await axios.get(videoObjectUrls[i]);
    videoObjects.push(obj.data);
  }
  const videoPayload = {
    keys: keys.data,
    videoObjects: videoObjects,
  } 
  commit("addVideoListToStore", videoPayload );
}; 

const getVideoIconDTO = async ({commit}, payload) => {
  const videoUrl = apiUrl + projectsRoute + `thumbnails/${payload}`;
  const videoDto = await axios.get(videoUrl); 
  commit('pushVideoDtoToStore', videoDto);
};

export default {
  getVideoListandObjects,
  getVideoIconDTO,
};