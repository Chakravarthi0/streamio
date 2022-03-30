import React from "react";
import { VideoCard } from "../index";
import "./video-card-with-delete.css";

function VideoCardWithDelete({ video, onDelete }) {
  return (
    <div className="video-card-with-delete">
      <VideoCard video={video} />
      <div className="delete-btn-container" onClick={() => onDelete(video._id)}>
        <i
          className="fas fa-trash-alt delete-playlist-btn"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
}

export { VideoCardWithDelete };
