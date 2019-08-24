import React, { Component } from 'react'
import Note from './components/Note'
import Header from './components/layouts/header'
import AddNote from './components/AddNote'
import './App.css'

export class App extends Component {
  state = {
    notes:[
      {
        id:1,
        title: 'hello',
        completed: false
      },
      {
        id: 2,
        title: 'woorld',
        completed: false
      }
    ]
  };

  // toggle completed set change function
  markComplete = (id)=>{
    this.setState({
      notes: this.state.notes.map(note =>{
      if(note.id === id){
        note.completed = !note.completed;
      }
      return note;
    })});
  }
  //remove note
  deleteNote = (id)=>{
    console.log(id);
    this.setState({
      notes: this.state.notes.filter(note=>{
        return note.id !== id;
      })
    })
  }

  // add todo
  addNote = (title) => {
    const newNote = {
      id: 4,
      title: title,
      completed: false

    }

    this.setState({ notes: [...this.state.notes, newNote] })
  }


  render() {
    return (
      <div>
        <Header/>
        <AddNote addNote = {this.addNote}/>
        <Note notes={this.state.notes} 
        markComplete={this.markComplete}
          deleteNote={this.deleteNote}
          />

      </div>
    )
  }
}

export default App
