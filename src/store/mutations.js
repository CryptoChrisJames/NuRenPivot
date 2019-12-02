const addVideoListToStore = (state, videoPayload) => {
  state.videoList = videoPayload.keys;
  state.videoObjects = videoPayload.videoObjects;
};

const toggleLoading = (state) => {
  state.loadingData = !state.loadingData;
};

const setCurrentVideo = (state, videoId) => { 
  const videos = state.videoObjects;
  const currentVid = videos.find(vid => vid._id === videoId);
  state.currentVideo = currentVid;
};

export default {
  addVideoListToStore,
  toggleLoading,
  setCurrentVideo,
};