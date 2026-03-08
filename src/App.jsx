import { NotesProvider } from './context/NotesContext';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import NoteStats from './components/NoteStats';

function App() {
  return (
    <NotesProvider>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          color: '#333',
          borderBottom: '2px solid #2196f3',
          paddingBottom: '10px'
        }}>
          📝 Notes Dashboard
        </h1>
        
        {/* All components can access the NotesContext */}
        <NoteInput />
        <NoteStats />
        <NoteList />
        
        <footer style={{
          marginTop: '40px',
          textAlign: 'center',
          color: '#666',
          fontSize: '14px'
        }}>
          Click any note to highlight it. Notes are saved automatically!
        </footer>
      </div>
    </NotesProvider>
  );
}

export default App;