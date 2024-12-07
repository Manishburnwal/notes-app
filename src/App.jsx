import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { v4 as uuid } from "uuid";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [noteText, setNoteText] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const addNote = () => {
    if (!noteText.trim()) return;

    const newNote = {
      id: uuid(),
      text: noteText,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setNoteText("");
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className="app">
      <header>
        <h1>Notes App</h1>
        <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <div className="note-input">
        <textarea
          rows="3"
          placeholder="Write a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
