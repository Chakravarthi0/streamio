import axios from "axios";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./index";
import { playlistReducer, playlistActions } from "../reducers/index";

const playlistContext = createContext([]);

const usePlaylist = () => useContext(playlistContext);

function PlaylistProvider({ children }) {
  const [playlistsState, playlistsDispatch] = useReducer(playlistReducer, {
    playlists: [],
    loading: false,
    error: false,
  });
  const {
    authState: { token },
  } = useAuth();

  const { SET_PLAYLISTS, SET_PLAYLIST, SET_LOADING, SET_ERROR } =
    playlistActions;

  useEffect(() => {
    (async () => {
      if (token) {
        playlistsDispatch({ type: SET_LOADING, payload: true });
        playlistsDispatch({ type: SET_ERROR, payload: false });
        try {
          let response = await axios.get("/api/user/playlists", {
            headers: {
              authorization: token,
            },
          });

          if (response.status === 200) {
            playlistsDispatch({
              type: SET_PLAYLISTS,
              payload: response.data.playlists,
            });
          }
        } catch (err) {
          console.log(err);
          playlistsDispatch({ type: SET_ERROR, payload: true });
        } finally {
          playlistsDispatch({ type: SET_LOADING, payload: false });
        }
      } else {
        playlistsDispatch({ type: SET_PLAYLISTS, payload: [] });
      }
    })();
  }, []);

  const createPlaylist = async (playlistName) => {
    playlistsDispatch({ type: SET_LOADING, payload: true });
    playlistsDispatch({ type: SET_ERROR, payload: false });
    try {
      let response = await axios.post(
        "/api/user/playlists",
        { playlist: { title: playlistName } },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 201) {
        playlistsDispatch({
          type: SET_PLAYLISTS,
          payload: response.data.playlists,
        });
      }
    } catch (err) {
      console.log(err);
      playlistsDispatch({ type: SET_ERROR, payload: true });
    } finally {
      playlistsDispatch({ type: SET_LOADING, payload: false });
    }
  };

  const deletePlaylist = async (playlistId) => {
    playlistsDispatch({ type: SET_LOADING, payload: true });
    playlistsDispatch({ type: SET_ERROR, payload: false });
    try {
      let response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        playlistsDispatch({
          type: SET_PLAYLISTS,
          payload: response.data.playlists,
        });
      }
    } catch (err) {
      console.log(err);
      playlistsDispatch({ type: SET_ERROR, payload: true });
    } finally {
      playlistsDispatch({ type: SET_LOADING, payload: false });
    }
  };

  const addToPlaylist = async (playlistId, video) => {
    playlistsDispatch({ type: SET_LOADING, payload: true });
    playlistsDispatch({ type: SET_ERROR, payload: false });
    try {
      let response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 201) {
        playlistsDispatch({
          type: SET_PLAYLIST,
          payload: response.data.playlist,
        });
      }
    } catch (err) {
      console.log(err);
      playlistsDispatch({ type: SET_ERROR, payload: true });
    } finally {
      playlistsDispatch({ type: SET_LOADING, payload: false });
    }
  };

  const deleteFromPlaylist = async (playlistId, videoId) => {
    playlistsDispatch({ type: SET_LOADING, payload: true });
    playlistsDispatch({ type: SET_ERROR, payload: false });
    try {
      let response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        playlistsDispatch({
          type: SET_PLAYLIST,
          payload: response.data.playlist,
        });
      }
    } catch (err) {
      console.log(err);
      playlistsDispatch({ type: SET_ERROR, payload: true });
    } finally {
      playlistsDispatch({ type: SET_LOADING, payload: false });
    }
  };

  return (
    <playlistContext.Provider
      value={{
        playlistsState,
        createPlaylist,
        deletePlaylist,
        addToPlaylist,
        deleteFromPlaylist,
      }}
    >
      {children}
    </playlistContext.Provider>
  );
}

export { PlaylistProvider, usePlaylist };
