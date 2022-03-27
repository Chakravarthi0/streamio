import React from "react";
import { VideoCardWithDelete } from "../../components/index";
import { videos } from "../../backend/db/videos";
import "./single-playlist.css";

function SinglePlaylist() {
  return (
    <div className="history-page-container">
      <div className="page-head">
        <h1 className="page-title">playlist #1</h1>
        <button className="btn btn-primary black">Delete playlist</button>
      </div>
      <div className="videos-container">
        {videos.map((video) => (
          <VideoCardWithDelete key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}

export { SinglePlaylist };
