import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  render() {
    return this.props.songs.map(song => {
      return (
        <div key={song.title}>
          <h4 style={{ marginBottom: '0', marginTop: '8px' }}>
            Title:{song.title}
          </h4>
          <button
            className='ui button primary'
            onClick={() => this.props.selectSong(song)}
          >
            Select
          </button>
        </div>
      );
    });
  }
}

// each time the action creator is called i,e the state is changed the mapStateToPrps is rerendered that component i.e SongList in this case
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs }; // specyfing which state to pass to the component
};

// connect is used to pass the sate to the componet and also
// pass the action creator to the component, ie. allow the component  to change the state
export default connect(
  mapStateToProps,
  {
    selectSong: selectSong // passing the action creator to the component as a prop
  }
)(SongList); // component name
