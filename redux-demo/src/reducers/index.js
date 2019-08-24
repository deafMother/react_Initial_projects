// reducers

import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Walk',
      duration: '4:25'
    },
    {
      title: 'Domination',
      duration: '1:25'
    },
    {
      title: 'The Power Slave',
      duration: '6:50'
    },
    {
      title: 'HammerHedd',
      duration: '4:34'
    }
  ];
};

// initial state cannot be undefined it can be null, or empty [] or empty {}, '' etc but not null
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
