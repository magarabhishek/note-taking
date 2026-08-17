import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote } from '../store/notesSlice';
import NoteCard from '../components/NoteCard';

function HomePage() {
  const [inputText, setInputText] = useState('');
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  // useEffect: Updates browser tab title dynamically whenever notes change
  useEffect(() => {
    document.title = `Notes (${notes.length})`;
  }, [notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newNote = {
      id: Date.now(),
      text: inputText,
      date: new Date().toLocaleDateString()
    };

    dispatch(addNote(newNote));
    setInputText('');
  };

  return (
    <div style={styles.container}>
      <h1>{"📝"} Notes Manager</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Add a new note..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Note</button>
      </form>

      <div style={styles.grid}>
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={(id) => dispatch(deleteNote(id))}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '600px', margin: '30px auto', padding: '0 20px', fontFamily: 'sans-serif' },
  form: { display: 'flex', gap: '10px', marginBottom: '20px' },
  input: { flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc' },
  button: { padding: '10px 16px', backgroundColor: '#0284c7', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  grid: { display: 'flex', flexDirection: 'column', gap: '12px' }
};

export default HomePage;