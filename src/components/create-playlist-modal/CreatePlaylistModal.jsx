import React, { useState } from "react";
import { usePlaylist } from "../../context/index";
import toast from "react-hot-toast";
import "./create-playlist-modal.css";

function CreatePlaylistModal({ setIsModalOpen }) {
  const [playlistName, setPlaylistName] = useState("");

  const { createPlaylist } = usePlaylist();
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="modal">
          <h3>Create new playlist</h3>
          <label>
            <h4 className="text-center">Playlist Name</h4>
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            />
          </label>
          <button
            className="btn btn-primary"
            onClick={() => {
              if (playlistName !== "") {
                createPlaylist(playlistName);
                setIsModalOpen(false);
              } else {
                toast.error("Playlist name cannot be empty");
              }
            }}
          >
            Create
          </button>
        </div>
        <i
          modal-btn-for="modal-one"
          className="material-icons modal-close-btn"
          onClick={() => setIsModalOpen(false)}
        >
          close
        </i>
      </div>
    </div>
  );
}

export { CreatePlaylistModal };
