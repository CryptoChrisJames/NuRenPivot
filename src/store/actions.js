import config from '../../config.js';
import axios from 'axios';


const apiUrl = 'http://' + config.currentEnvAPI();

const projectsRoute = "/project/";

const getVideoListandObjects = async ({commit}) => {
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
};

const submitContact = async ({commit}, payload) => {
};

export default {
  getVideoListandObjects,
};