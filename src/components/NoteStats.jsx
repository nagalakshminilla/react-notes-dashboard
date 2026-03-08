import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteStats = () => {
  const { totalNotes } = useContext(NotesContext);

  return (
    <div style={{ 
      margin: '20px', 
      padding: '10px', 
      border: '1px solid #ccc',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Statistics</h3>
      <p style={{ fontSize: '18px' }}>
        Total Notes: <strong>{totalNotes}</strong>
      </p>
      {totalNotes > 0 && (
        <p>Click on any note to select it!</p>
      )}
    </div>
  );
};

export default NoteStats;