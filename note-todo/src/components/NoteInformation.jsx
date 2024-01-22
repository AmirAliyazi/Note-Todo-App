import React from 'react'
import Message from './Message';

function NoteInformation({notes}) {
    const allNotes = notes.length;
    const completedNotes = notes.filter(note => note.completed).length;
    const unCompletedNotes = allNotes - completedNotes;

    if(allNotes===0) return <Message>
        No Note To Preview...
    </Message>

    return (
        <div className="note-information">
            <p>All ({allNotes})</p>
            <p>Completed ({completedNotes})</p>
            <p>Uncompleted ({unCompletedNotes})</p>
        </div>
    )
}

export default NoteInformation