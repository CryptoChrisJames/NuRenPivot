const addVideoListToStore = (state, keys) => {
  state.videoList = keys;
};

const pushVideoDtoToStore = (state, videoDto) => {
  state.videoIconDTOs.push(videoDto.data);
}
export default {
  addVideoListToStore,
  pushVideoDtoToStore,
};