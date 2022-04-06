import React, { useState } from "react";
import { useAuth } from "../../context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./note-input.css";

const defaultNote = {
  title: "",
  content: "",
};

function NoteInput({
  createNote,
  videoId,
  note = defaultNote,
  editNote,
  isEditing,
  setIsEditing,
}) {
  const [currentNote, setCurrentNote] = useState(note);

  const {
    authState: { token },
  } = useAuth();

  const navigate = useNavigate();

  const submitHandler = () => {
    if (token) {
      if (
        currentNote.title.trim().length &&
        currentNote.content.trim().length
      ) {
        createNote({ videoId, ...currentNote });
        setCurrentNote({ title: "", content: "" });
      } else {
        toast.error("Please make sure you have entered all the data.");
      }
    } else {
      navigate("/signin");
    }
  };

  const editNoteHandler = () => {
    if (currentNote.title.trim().length && currentNote.content.trim().length) {
      editNote(note._id, currentNote);
      setIsEditing(false);
    } else {
      toast.error("Please make sure you have entered all the data.");
    }
  };
  return (
    <div className="note-input-container">
      {!isEditing && <h2 className="text-center">Notes</h2>}
      <input
        className="input note-input"
        type={"text"}
        placeholder={"Title"}
        value={currentNote.title}
        onChange={(e) =>
          setCurrentNote((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <textarea
        className="input note-input note-text-area"
        value={currentNote.content}
        onChange={(e) =>
          setCurrentNote((prev) => ({ ...prev, content: e.target.value }))
        }
      ></textarea>

      {isEditing ? (
        <button className="btn btn-primary black" onClick={editNoteHandler}>
          Update Note
        </button>
      ) : (
        <button className="btn btn-primary black" onClick={submitHandler}>
          Add Note
        </button>
      )}
    </div>
  );
}

export { NoteInput };
