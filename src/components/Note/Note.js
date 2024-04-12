import React from 'react';
import { notesDelete } from '../../utilities/notes-api';

function Note({ id, text, date, setNotesList, notesList }) {
  const handleDeleteClick = async () => {
    try {
        const removedNote = await notesDelete(id);
        setNotesList(prevNotesList => prevNotesList.filter(note => note._id !== id));
    } catch (error) {
        console.error('Error deleting note:', error);
    }
};

  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default Note;
