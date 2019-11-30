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
  const videoObjects = videoObjectUrls.map( async video => {
    const response = await axios.get(video);
    return response.data;
  })
  // Promise.all(videoObjectUrls.map( async video => {
  //   return await axios.get(video)
  //     .then(response => {
  //       console.log(response.data);
  //       //videoObjects.push(response.data);
  //     })
  // }))
  // for (let i = 0; i < videoObjectUrls.length; i ++) {
  //   const obj = await axios.get(videoObjectUrls[i]);
  //   videoObjects.push(obj.data);
  // }
  const videoPayload = {
    keys: keys.data,
    videoObjects: videoObjects,
  } 
  commit("addVideoListToStore", videoPayload );
};

export default {
  getVideoListandObjects,
};