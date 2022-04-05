import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./index";
import toast from "react-hot-toast";

const historyContext = createContext([]);

const useHistory = () => useContext(historyContext);

function HistoryProvider({ children }) {
  const [history, setHistory] = useState([]);

  const {
    authState: { token },
  } = useAuth();

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          let response = await axios.get("/api/user/history", {
            headers: {
              authorization: token,
            },
          });
          if (response.status === 200) {
            setHistory(response.data.history);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setHistory([]);
      }
    })();
  }, [token]);

  const addToHistory = async (video) => {
    try {
      let response = await axios.post(
        "/api/user/history",
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 201) {
        setHistory(response.data.history);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromHistory = async (videoId) => {
    try {
      let response = await axios.delete(`/api/user/history/${videoId}`, {
        headers: {
          authorization: token,
        },
      });

      if (response.status === 200) {
        setHistory(response.data.history);
        toast.success("Video has been removed from history");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error[0]);
    }
  };

  const deleteHistory = async () => {
    try {
      let response = await axios.delete("/api/user/history/all", {
        headers: {
          authorization: token,
        },
      });
      console.log(response);
      if (response.status === 200) {
        setHistory(response.data.history);
        toast.success("History cleared");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error[0]);
    }
  };

  return (
    <historyContext.Provider
      value={{ history, addToHistory, removeFromHistory, deleteHistory }}
    >
      {children}
    </historyContext.Provider>
  );
}

export { HistoryProvider, useHistory };
