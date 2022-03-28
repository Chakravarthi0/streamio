import React from "react";
import { VideoCard } from "../../components/index";
import { videos } from "../../backend/db/videos";
import "./watch-later.css";

function WatchLater() {
  return (
    <div>
        <h1 className="page-title text-center">Watch later</h1>
      <div className="videos-container">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}

export { WatchLater };
