import { useState } from 'react';

function NoteForm({ onAddNote }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Send text back to parent (App.jsx)
    onAddNote(inputText);
    setInputText(''); // Reset input box
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Write a note..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.addButton}>
        Add Note
      </button>
    </form>
  );
}

const styles = {
  form: { display: 'flex', gap: '10px', marginBottom: '24px' },
  input: { flex: 1, padding: '12px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc' },
  addButton: { padding: '12px 20px', fontSize: '16px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }
};

export default NoteForm;