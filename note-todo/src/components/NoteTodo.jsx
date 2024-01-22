import NoteInformation from "./NoteInformation"


function NoteTodo({ notes, onDelete, onCompletedNote, sortBy }) {

    let sortedNote = notes;
    if (sortBy === "latest") {
        sortedNote = [...notes].sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
    }
    if (sortBy === "earliest") {
        sortedNote = [...notes].sort((a, b) => new Date(a.createAt) - new Date(b.createAt));
    }
    if (sortBy === "earliest") {
        sortedNote = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed));
    }

    return (
        <div className="note-todo">
            <NoteInformation notes={notes} />
            {
                sortedNote.map(note => <AddTodo key={note.id} note={note} onDelete={onDelete} onCompletedNote={onCompletedNote} />)
            }
        </div>
    )
}

export default NoteTodo



function AddTodo({ note, onDelete, onCompletedNote }) {
    const option = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return (
        <div className="add-note-todo">
            <div className={`todo ${note.completed ? "completed" : ""}`}>
                <div className="todo-information">
                    <p className="todo-title">{note.title}</p>
                    <p className="todo-description">{note.description}</p>
                    <p className="todo-date">{new Date(note.createAt).toLocaleDateString("en-CA", option)}</p>
                </div>
                <div className="todo-icon">
                    <button onClick={() => onDelete(note.id)} className="trash-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                    </button>
                    <label className="checkbox">
                        <input type="checkbox" onChange={onCompletedNote} name={note.id} id={note.id} value={note.id} className="checkbox-input" />
                        <div className="checkbox-box"></div>
                    </label>
                    {/* <button className="check-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </div>
    )
}



