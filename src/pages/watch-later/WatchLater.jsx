import React from "react";
import { VideoCard, LoadingError, Loader } from "../../components/index";
import { videos } from "../../backend/db/videos";
import { useWatchLater } from "../../context/index";
import "./watch-later.css";

function WatchLater() {
  const {
    watchLaterState: { watchLater, loading, error },
    addToWatchLater,
    removeFromWatchLater,
  } = useWatchLater();
  return (
    <div>
      <h1 className="page-title text-center">Watch later</h1>
      <div className="videos-container">
        {loading && <Loader isFullScreen={true} />}

        {error && <LoadingError />}

        {watchLater.length > 0 &&
          watchLater.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
      </div>
      {watchLater.length === 0 && !error && (
        <h2 className="text-center">No liked videos</h2>
      )}
    </div>
  );
}

export { WatchLater };
