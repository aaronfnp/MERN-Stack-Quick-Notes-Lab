import React, { useState } from 'react'
import {notesCreate} from '../../utilities/notes-api'

function AddNote({user, notesList, setNotesList}) {
    const [noteText, setNoteText] = useState('');

    const handleChange = (e) => {
        setNoteText(e.target.value);
    }

    const handleSaveClick = async () => {
        const newNote = await notesCreate({text: noteText, user: user._id});
        setNotesList([...notesList, newNote]);
        setNoteText('');
    }

  return (
    <div className='note new'>
        <textarea 
            rows="8" 
            cols="10"  
            placeholder='Add New Note'
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className='note-footer'>
            <small>200 Remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote

