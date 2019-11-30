const addVideoListToStore = (state, videoPayload) => {
  state.videoList = videoPayload.keys;
  state.videoObjects = videoPayload.videoObjects;
};

const toggleLoading = (state) => {
  state.loadingData = !state.loadingData;
};

export default {
  addVideoListToStore,
  toggleLoading,
};