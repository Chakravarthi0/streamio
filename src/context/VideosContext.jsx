import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const videosContext = createContext([]);

const useVideos = () => useContext(videosContext);

function VideosProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        let response = await axios.get("/api/videos");

        if (response.status === 200) {
          console.log("success ", response);
          setVideos(response.data.videos);
          console.log(videos);
        }
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <videosContext.Provider value={{ videos, isLoading, error }}>
      {children}
    </videosContext.Provider>
  );
}

export { VideosProvider, useVideos };
