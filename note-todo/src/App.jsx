import React from 'react'
import "./App.css";
import AddNewNotes from './components/AddNewNotes';
import NoteTodo from './components/NoteTodo';
import { useState } from 'react';
import NoteHeader from './components/NoteHeader';

function App() {

  const [notes , setNotes] = useState([]);
  const [sortBy , setSortBy] = useState("latest")

  const handleAddNote = (newNote) => {
    setNotes((pervNotes) => [...pervNotes , newNote]);
  }

  const handleDeleteNote = (id) => {
    setNotes(pervNotes => pervNotes.filter(n => n.id!==id));
  }

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.id);

    setNotes(pervNotes => pervNotes.map(note => note.id === noteId ? {...note , completed : !note.completed} : note))
  }


  return (
    <div className='note'>

      <NoteHeader notes={notes} sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)}/>

      <div className="note-content">
        <AddNewNotes onAddNote={handleAddNote} />
        <NoteTodo notes={notes} sortBy={sortBy} onDelete={handleDeleteNote} onCompletedNote={handleCompleteNote} />
      </div>
    </div>
  )
}

export default App