import config from '../../config.js';
import axios from 'axios';


const apiUrl = config.currentSecurity() + config.currentEnvAPI();

const projectsRoute = "/project/";
const contentRoute = "/content/";
const showAOTLRoute = "/switch/AOTL";

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

// eslint-disable-next-line
const submitContact = async ({commit}, payload) => {
  const commentsUrl = apiUrl + "/comment";
  await axios.post(commentsUrl, {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    comments: payload.comments,
  })
};

const getVideoContent = async ({commit}) => {
  const contentUrl = apiUrl + contentRoute;
  const videoContent = await axios.get(contentUrl);
  commit("addVideoContentToStore", videoContent.data);
}

const getAOTLSwitch = async ({commit}) => {
  const showAOTL = apiUrl + showAOTLRoute;
  const result = await axios.get(showAOTL);
  commit("setShowAOTL", result.data);
};

export default {
  getVideoListandObjects,
  submitContact,
  getVideoContent,
  getAOTLSwitch,
};