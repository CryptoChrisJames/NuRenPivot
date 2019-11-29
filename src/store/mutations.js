const addVideoListToStore = (state, videoPayload) => {
  console.log(videoPayload);
  //state.videoList = keys;
};

const pushVideoDtoToStore = (state, videoDto) => {
  state.videoIconDTOs.push(videoDto.data);
}
export default {
  addVideoListToStore,
  pushVideoDtoToStore,
};