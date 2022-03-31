import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { likesActions, likesReducer } from "../reducers/index";
import { useAuth } from "./index";

const likesContext = createContext([]);

const useLikes = () => useContext(likesContext);

function LikesProvider({ children }) {
  const {
    authState: { token },
  } = useAuth();

  const [likesState, likesDispatch] = useReducer(likesReducer, {
    likes: [],
    error: false,
    loading: false,
  });
  const { SET_LIKES, SET_LOADING, SET_ERROR } = likesActions;

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          likesDispatch({ type: SET_ERROR, payload: false });
          likesDispatch({ type: SET_LOADING, payload: true });
          let response = await axios.get("/api/user/likes", {
            headers: {
              authorization: token,
            },
          });
          if (response.status === 200) {
            likesDispatch({ type: SET_LIKES, payload: response.data.likes });
          }
        } catch (err) {
          likesDispatch({ type: SET_ERROR, payload: true });
          console.log(err);
        } finally {
          likesDispatch({ type: SET_LOADING, payload: false });
        }
      } else {
        likesDispatch({ type: SET_LIKES, payload: [] });
      }
    })();
  }, [token]);

  const addToLikes = async (video) => {
    try {
      likesDispatch({ type: SET_ERROR, payload: false });
      const response = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 201) {
        likesDispatch({ type: SET_LIKES, payload: response.data.likes });
      }
    } catch (err) {
      likesDispatch({ type: SET_ERROR, payload: true });
      console.log(err);
    }
  };

  const removeFromLikes = async (videoId) => {
    try {
      likesDispatch({ type: SET_ERROR, payload: false });
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        likesDispatch({ type: SET_LIKES, payload: response.data.likes });
      }
    } catch (err) {
      likesDispatch({ type: SET_ERROR, payload: true });
      console.log(err);
    }
  };

  return (
    <likesContext.Provider value={{ likesState, addToLikes, removeFromLikes }}>
      {children}
    </likesContext.Provider>
  );
}

export { LikesProvider, useLikes };
