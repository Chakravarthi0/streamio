import axios from "axios";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./index";
import { watchLaterActions, watchLaterReducer } from "../reducers";

const watchLaterContext = createContext([]);

const useWatchLater = () => useContext(watchLaterContext);

const { SET_WATCH_LATER, SET_LOADING, SET_ERROR } = watchLaterActions;

function WatchLaterProvider({ children }) {
  const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
    watchLater: [],
    loading: false,
    error: false,
  });
  const {
    authState: { token },
  } = useAuth();

  useEffect(() => {
    (async () => {
      if (token) {
        watchLaterDispatch({ type: SET_ERROR, payload: false });
        watchLaterDispatch({ type: SET_LOADING, payload: true });
        try {
          let response = await axios.get("/api/user/watchlater", {
            headers: {
              authorization: token,
            },
          });

          if (response.status === 200) {
            watchLaterDispatch({
              type: SET_WATCH_LATER,
              payload: response.data.watchlater,
            });
          }
        } catch (err) {
          console.log(err);
          watchLaterDispatch({ type: SET_ERROR, payload: true });
        } finally {
          watchLaterDispatch({ type: SET_LOADING, payload: false });
        }
      } else {
        watchLaterDispatch({ type: SET_WATCH_LATER, payload: [] });
      }
    })();
  }, [token]);

  const addToWatchLater = async (video) => {
    watchLaterDispatch({ type: SET_ERROR, payload: false });
    watchLaterDispatch({ type: SET_LOADING, payload: true });
    try {
      let response = await axios.post(
        "/api/user/watchlater",
        { video },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        watchLaterDispatch({
          type: SET_WATCH_LATER,
          payload: response.data.watchlater,
        });
      }
    } catch (err) {
      console.log(err);
      watchLaterDispatch({ type: SET_ERROR, payload: true });
    } finally {
      watchLaterDispatch({ type: SET_LOADING, payload: false });
    }
  };

  const removeFromWatchLater = async (videoId) => {
    watchLaterDispatch({ type: SET_ERROR, payload: false });
    watchLaterDispatch({ type: SET_LOADING, payload: true });
    try {
      let response = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: { authorization: token },
      });

      if (response.status === 200) {
        watchLaterDispatch({
          type: SET_WATCH_LATER,
          payload: response.data.watchlater,
        });
      }
    } catch (err) {
      console.log(err);
      watchLaterDispatch({ type: SET_ERROR, payload: true });
    } finally {
      watchLaterDispatch({ type: SET_LOADING, payload: false });
    }
  };

  return (
    <watchLaterContext.Provider
      value={{ watchLaterState, addToWatchLater, removeFromWatchLater }}
    >
      {children}
    </watchLaterContext.Provider>
  );
}

export { WatchLaterProvider, useWatchLater };
