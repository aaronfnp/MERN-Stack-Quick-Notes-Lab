import React, {useState, useEffect} from 'react'
import Note from '../Note/Note'
import AddNote from '../AddNote/AddNote'
import {notesIndex} from '../../utilities/notes-api'


function NotesList({handleAddNote, handleDeleteNote, user}) {
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const notes = await notesIndex();
                setNotesList(notes);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();

    }, []);

    return (
        <div className='notes-list'>
            {notesList.map((note, idx) => (
                <Note key={idx} id={note._id} text={note.text} date={note.createdAt} setNotesList={setNotesList} notesList={notesList}/>
            ))}
            <AddNote handleAddNote={handleAddNote} user={user} notesList={notesList} setNotesList={setNotesList} />
        </div>
    );
}

export default NotesList
