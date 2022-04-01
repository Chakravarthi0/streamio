import React from "react";
import { usePlaylist } from "../../context/index";
import { useNavigate } from "react-router-dom";
import "./playlist-card.css";

function PlaylistCard({ playlist }) {
  const { title, _id } = playlist;
  const navigate = useNavigate();
  const { deletePlaylist } = usePlaylist();
  return (
    <div className="playlist-card-container bg-white-pure">
      <div
        className="playist-card-title"
        onClick={() => navigate(`/playlists/${playlist._id}`)}
      >
        <h4>{title}</h4>
      </div>
      <i
        className="fas fa-trash-alt delete-btn"
        onClick={() => deletePlaylist(_id)}
      ></i>
    </div>
  );
}

export { PlaylistCard };
