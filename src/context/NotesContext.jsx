import React, { createContext, useState, useEffect, useMemo } from 'react';
 
export const NotesContext = createContext();
 
export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  
  const [noteInput, setNoteInput] = useState('');
 
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    }
  }, []); 
 
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    } else {
      localStorage.removeItem('notes');
    }
  }, [notes]); 
 
  const addNote = () => {
    if (noteInput.trim() === '') return; 
    
    const newNote = {
      id: Date.now(), 
      text: noteInput.trim(),
      createdAt: new Date().toISOString()
    };
    
    setNotes([...notes, newNote]);
    setNoteInput(''); 
  };
 
  const selectNote = (id) => {
    setSelectedNoteId(id);
  };
 
  const updateNoteInput = (value) => {
    setNoteInput(value);
  };
 
  const totalNotes = useMemo(() => {
    console.log('Calculating total notes...');
    return notes.length;
  }, [notes]);
 
  const contextValue = {
    notes,
    selectedNoteId,
    noteInput,
    totalNotes,
    addNote,
    selectNote,
    updateNoteInput
  };
 
  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
};