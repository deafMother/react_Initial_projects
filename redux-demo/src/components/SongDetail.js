import React from 'react';
import { connect } from 'react-redux';


const SongDetail = (props)=>{
    if (!props.song) {
        return <div>select song..</div>

    }
    return (        
        <div>
            <h4>Title: {props.song.title}</h4>
            <p>Duration: {props.song.duration}</p>
        </div>
    );
}

const mapPropsToState = (state)=>{
    return {song:state.selectedSong};
}

export default connect(mapPropsToState)(SongDetail);