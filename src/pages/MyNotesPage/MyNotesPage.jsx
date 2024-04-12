import NotesList from '../../components/NotesList/NotesList';

export default function MyNotesPage({notes, handleAddNote, handleDeleteNote, user}) {
  return (
    <>
      <h1>My Notes Page</h1>
      <NotesList notes={notes} handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote} user={user} />
    </>
  );
}