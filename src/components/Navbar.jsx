import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>{"🚀"} React Notes App</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>My Notes</Link>
        <Link to="/stats" style={styles.link}>Analytics</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#1e293b', color: 'white' },
  links: { display: 'flex', gap: '20px' },
  link: { color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }
};

export default Navbar;