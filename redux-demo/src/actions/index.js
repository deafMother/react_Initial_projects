//Action creator, using named export concept
export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
