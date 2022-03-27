import React from "react";
import { VideoCardWithDelete } from "../../components/index";
import { videos } from "../../backend/db/videos";
import "./history.css";

function History() {
  return (
    <div className="history-page-container">
      <div className="page-head">
        <h1 className="page-title">History</h1>
        <button
          className="btn btn-primary black"
        >
          Clear history
        </button>
      </div>
      <div className="videos-container">
        {videos.map((video) => (
          <VideoCardWithDelete key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}

export { History };
