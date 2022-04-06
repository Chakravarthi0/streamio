import React, { useState } from "react";
import { NoteInput } from "../index";
import "./note-card.css";

function NoteCard({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const { title, content, _id } = note;
  return (
    <>
      {isEditing ? (
        <NoteInput
          note={note}
          editNote={editNote}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div className="card">
          <p className="card-title text-center">{title}</p>
          <p className="card-description text-center">{content}</p>
          <div className="note-actions">
            <i
              className="material-icons btn btn-dark btn-float note-card-icon"
              onClick={() => setIsEditing(true)}
            >
              edit
            </i>
            <i
              className="material-icons btn btn-dark btn-float note-card-icon"
              onClick={() => deleteNote(_id)}
            >
              delete
            </i>
          </div>
        </div>
      )}
    </>
  );
}

export { NoteCard };
