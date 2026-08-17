import NoteCard from './NoteCard';

function NoteList({ notes, onDeleteNote }) {
  if (notes.length === 0) {
    return <p style={styles.emptyState}>No notes yet. Add one above!</p>;
  }

  return (
    <div style={styles.notesGrid}>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
}

const styles = {
  notesGrid: { display: 'flex', flexDirection: 'column', gap: '12px' },
  emptyState: { textAlign: 'center', color: '#888' }
};

export default NoteList;