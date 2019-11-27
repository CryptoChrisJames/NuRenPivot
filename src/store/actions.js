import config from '../../config.js';
import axios from 'axios';


const apiUrl = 'http://' + config.currentEnvAPI();

const projectsRoute = "/project/";

const getVideoList = async ({commit}) => {
  const videoUrl = apiUrl + projectsRoute + "videos";
  const keys = await axios.get(videoUrl);
  commit('addVideoListToStore', keys.data);
}; 

const getVideoIconDTO = async ({commit}, payload) => {
  const videoUrl = apiUrl + projectsRoute + `thumbnails/${payload}`;
  const videoDto = await axios.get(videoUrl); 
  commit('pushVideoDtoToStore', videoDto);
};

const videoIconResponse = async (id) => { 
  return await axios.get(apiUrl 
  + projectsRoute 
  + 'thumbnails/'
  + id);
};
export default {
  getVideoList,
  getVideoIconDTO,
};