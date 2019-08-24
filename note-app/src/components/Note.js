import React, { Component } from 'react'
import NoteItem from './noteItem';
import PropTypes from 'prop-types';

export class Note extends Component {
    render() {
        return this.props.notes.map((note) => {
            return <NoteItem key={note.id} NoteItem={note}
                markComplete={this.props.markComplete}
                deleteNote={this.props.deleteNote}
            />
        });
    }
}

Note.propTypes = {
    notes: PropTypes.array.isRequired
}

export default Note
