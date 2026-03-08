import { useContext, useRef, useEffect } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteInput = () => {
  const { noteInput, updateNoteInput, addNote } = useContext(NotesContext);
  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote();
  };

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Add New Note</h3>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={noteInput}
          onChange={(e) => updateNoteInput(e.target.value)}
          placeholder="Enter your note..."
          style={{ width: '300px', padding: '8px', marginRight: '10px' }}
        />
        <button 
          type="submit"
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteInput;