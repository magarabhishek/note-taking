import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function StatsPage() {
  const notes = useSelector((state) => state.notes);
  const [totalWords, setTotalWords] = useState(0);

  // useEffect: Recalculates word statistics whenever Redux notes state changes
  useEffect(() => {
    const words = notes.reduce((acc, note) => {
      const wordCount = note.text.trim().split(/\s+/).filter(Boolean).length;
      return acc + wordCount;
    }, 0);
    setTotalWords(words);
  }, [notes]);

  return (
    <div style={styles.container}>
      <h1>{"📊"} Notes Analytics</h1>
      <div style={styles.cardGroup}>
        <div style={styles.statCard}>
          <h3>Total Notes</h3>
          <p style={styles.number}>{notes.length}</p>
        </div>
        <div style={styles.statCard}>
          <h3>Total Words</h3>
          <p style={styles.number}>{totalWords}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '600px', margin: '30px auto', padding: '0 20px', fontFamily: 'sans-serif' },
  cardGroup: { display: 'flex', gap: '20px', marginTop: '20px' },
  statCard: { flex: 1, backgroundColor: '#f1f5f9', padding: '20px', borderRadius: '8px', textAlign: 'center' },
  number: { fontSize: '32px', fontWeight: 'bold', color: '#0284c7', margin: '10px 0 0 0' }
};

export default StatsPage;