import React, { useState } from "react";
import {
  PlaylistCard,
  CreatePlaylistModal,
  Loader,
  LoadingError,
} from "../../components/index";
import { usePlaylist } from "../../context/index";
import "./playlists.css";

function Playlists() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    playlistsState: { playlists, loading, error },
  } = usePlaylist();

  return (
    <div className="playlist-page-container">
      <div className="page-head">
        <h1 className="page-title">Playlists</h1>
        <button
          className="btn btn-primary black"
          onClick={() => setIsModalOpen(true)}
        >
          Create new playlist
        </button>
      </div>
      {isModalOpen && <CreatePlaylistModal setIsModalOpen={setIsModalOpen} />}
      {loading && <Loader />}
      {error && <LoadingError />}
      <div className="playlist-cards-container">
        {!loading &&
          playlists.length > 0 &&
          playlists.map((ele) => (
            <PlaylistCard key={ele._id} playlist={ele} title={ele.title} />
          ))}
      </div>
      {!loading && playlists.length === 0 && (
        <h2 className="text-center">No playlists available</h2>
      )}
    </div>
  );
}

export { Playlists };
