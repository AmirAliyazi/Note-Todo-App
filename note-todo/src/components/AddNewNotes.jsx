import React, { useState } from 'react'

function AddNewNotes({onAddNote}) {

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if(! title || ! description) return;
        
        const newNote = {
            title,
            description,
            id : Date.now(),
            completed : false,
            createAt : new Date().toISOString(),
        }

        setTitle("");
        setDescription("");
        onAddNote(newNote)
    }
  return (
    <div className="note-add">
          <h3>Add New Note:</h3>
          <form className="note-add-input" onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='note-title' placeholder='your title...' />
            <textarea name="" id="" value={description} onChange={e => setDescription(e.target.value)} className='note-description' placeholder='your description...'></textarea>
            <button type='submit' className='add-note-btn'>Add Note</button>
          </form>
        </div>
  )
}

export default AddNewNotes