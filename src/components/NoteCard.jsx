function NoteCard({ note, onDelete }) {
  return (
    <div style={styles.card}>
      <p style={styles.text}>{note.text}</p>
      <div style={styles.footer}>
        <small style={styles.date}>{note.date}</small>
        <button onClick={() => onDelete(note.id)} style={styles.deleteBtn}>
          Delete {"🗑️"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: { backgroundColor: '#fef08a', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
  text: { margin: '0 0 10px 0', fontSize: '16px' },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  date: { color: '#64748b' },
  deleteBtn: { background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold' }
};

export default NoteCard;