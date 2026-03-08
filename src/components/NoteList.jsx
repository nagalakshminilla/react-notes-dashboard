import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteList = () => {
  const { notes, selectedNoteId, selectNote } = useContext(NotesContext);

  const selectedStyle = {
    backgroundColor: '#e3f2fd',
    border: '2px solid #2196f3'
  };

  const normalStyle = {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd'
  };

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Your Notes</h3>
      {notes.length === 0 ? (
        <p>No notes yet. Add your first note above!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {notes.map((note) => (
            <li
              key={note.id}
              onClick={() => selectNote(note.id)}
              style={{
                ...(selectedNoteId === note.id ? selectedStyle : normalStyle),
                padding: '12px',
                margin: '8px 0',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ fontWeight: 'bold' }}>{note.text}</div>
              <small style={{ color: '#666' }}>
                Added: {new Date(note.createdAt).toLocaleString()}
              </small>
              {selectedNoteId === note.id && (
                <span style={{ 
                  marginLeft: '10px', 
                  color: '#2196f3',
                  fontWeight: 'bold'
                }}>
                  ✓ Selected
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;