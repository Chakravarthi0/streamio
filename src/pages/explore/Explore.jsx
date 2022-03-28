import React from "react";
import { VideoCard, Loader, LoadingError } from "../../components/index";
import { useVideos } from "../../context/index";
import "./explore.css";

function Explore() {
  const { videos, isLoading, error } = useVideos();
  return (
    <div className="explore-container">
      {isLoading && <Loader />}
      {error && <LoadingError />}

      {videos.length > 0 && (
        <div className="videos-container explore-container">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}

export { Explore };
