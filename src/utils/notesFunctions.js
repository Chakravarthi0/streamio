import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context";

function useNotes(videoId) {
  const [notesState, setNotesState] = useState({
    notes: [],
    loading: false,
  });
  const {
    authState: { token },
  } = useAuth();

  useEffect(() => {
    token
      ? (async () => {
          try {
            setNotesState((prevNotes) => ({
              ...prevNotes,
              loading: true,
            }));

            const response = await axios.get(`/api/user/notes/${videoId}`, {
              headers: {
                authorization: token,
              },
            });

            if (response.status === 200) {
              setNotesState((prevNotes) => ({
                ...prevNotes,
                loading: false,
                notes: response.data.notes,
              }));
            }
          } catch (err) {
            console.log(err);
          }
        })()
      : setNotesState((prevNotes) => ({
          ...prevNotes,
          loading: false,
          notes: [],
        }));
  }, [token]);

  const createNote = async (note) => {
    setNotesState((prevNotes) => ({
      ...prevNotes,
      loading: true,
    }));
    try {
      let response = await axios.post(
        "/api/user/notes",
        { note },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 201) {
        setNotesState((prevNotes) => ({
          ...prevNotes,
          notes: response.data.notes,
        }));

        toast.success("Note added successfully");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    } finally {
      setNotesState((prevNotes) => ({
        ...prevNotes,
        loading: false,
      }));
    }
  };

  const editNote = async (noteId, note) => {
    try {
      let response = await axios.post(
        `/api/user/notes/${noteId}`,
        { note },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 201) {
        setNotesState((prevNotes) => ({
          ...prevNotes,
          notes: response.data.notes,
        }));
        toast.success("Note updated");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      let response = await axios.delete(`/api/user/notes/${noteId}`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        setNotesState((prevNotes) => ({
          ...prevNotes,
          notes: response.data.notes,
        }));
        toast.success("Note deleted successfully");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };

  return {
    notesState,
    setNotesState,
    createNote,
    editNote,
    deleteNote,
  };
}

export { useNotes };
