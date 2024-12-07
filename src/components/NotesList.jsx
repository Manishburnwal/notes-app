import React from "react";
import NoteCard from "./NoteCard";

const NotesList = ({ notes, deleteNote }) => {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteCard key={note.id} note={note} deleteNote={deleteNote} />
        ))
      ) : (
        <p>No notes yet. Add your first note!</p>
      )}
    </div>
  );
};

export default NotesList;
