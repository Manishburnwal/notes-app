import React from "react";

const NoteCard = ({ note, deleteNote }) => {
  return (
    <div className="note-card">
      <p>{note.text}</p>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteCard;
