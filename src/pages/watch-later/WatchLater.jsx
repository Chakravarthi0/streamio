import React from "react";
import { VideoCard, LoadingError, Loader } from "../../components/index";
import { videos } from "../../backend/db/videos";
import { useWatchLater } from "../../context/index";
import "./watch-later.css";

function WatchLater() {
  const {
    watchLaterState: { watchLater, loading, error },
  } = useWatchLater();
  return (
    <div>
      <h1 className="page-title text-center">Watch later</h1>
        {loading && <Loader isFullScreen={true} />}
      <div className="videos-container">

        {error && <LoadingError isFullScreen={true} />}

        {(watchLater.length > 0 && !loading) &&
          watchLater.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
      </div>
      {watchLater.length === 0 && !error && (
        <h2 className="text-center">No videos here.</h2>
      )}
    </div>
  );
}

export { WatchLater };
