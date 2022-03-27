import React from "react";
import {useNavigate} from "react-router-dom";
import "./playlist-card.css";

const playlist = {
  name: "Playlist #1",
  videoCount: 10,
};

function PlaylistCard() {
  const navigate = useNavigate();
  const { name, videoCount } = playlist;
  return (
    <div className="playlist-card-container bg-white-pure" onClick={() => navigate("/single-playlist")}>
      <div>
        <h4>{name}</h4>
        <p>{videoCount} videos</p>
      </div>
      <i className="fas fa-trash-alt delete-btn"></i>
    </div>
  );
}

export { PlaylistCard };
