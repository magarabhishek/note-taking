function Header({ count }) {
  return (
    <header style={styles.header}>
      <h1>{"📝"} Quick Notes</h1>
      <p>{count} {count === 1 ? 'note' : 'notes'} saved</p>
    </header>
  );
}

const styles = {
  header: { textAlign: 'center', marginBottom: '24px' }
};

export default Header;