const addVideoListToStore = (state, videoPayload) => {
  state.videoList = videoPayload.keys;
  state.videoObjects = videoPayload.videoObjects;
  state.currentGallery = state.videoList;
};

const toggleLoading = (state) => {
  state.loadingData = !state.loadingData;
};

const setCurrentVideo = (state, videoId) => { 
  const videos = state.videoObjects;
  const currentVid = videos.find(vid => vid._id === videoId);
  state.currentVideo = currentVid;
  const duplicate = state.videoList.find(dup => dup === videoId);
  state.currentGallery = state.videoList;
  state.currentGallery.splice(state.currentGallery.indexOf(duplicate), 1);
};

const resetGallery = (state) => {
  state.currentGallery = state.videoList;
};

export default {
  addVideoListToStore,
  toggleLoading,
  setCurrentVideo,
  resetGallery,
};