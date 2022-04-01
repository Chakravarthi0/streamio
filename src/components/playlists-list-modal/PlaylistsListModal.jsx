import React, { useState } from "react";
import { usePlaylist } from "../../context/index";
import { Loader } from "../index";
import "./playlists-list-modal.css";

function PlaylistsListModal({ setIsModalOpen, video }) {
  const {
    playlistsState: { playlists, loading },
    createPlaylist,
    addToPlaylist,
    deleteFromPlaylist,
  } = usePlaylist();
  const [playlistName, setPlaylistName] = useState("");
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);

  return (
    <div className="modal-bg playlist-lists-modal-bg">
      <div className="modal-container">
        <div className="modal playlists-list-modal">
          <div className="playlists-listing">
            {!loading &&
              playlists.map((ele) => {
                return (
                  <label key={ele._id} className="pointer">
                    <input
                      type="checkbox"
                      name={ele.title}
                      checked={ele.videos.find(
                        (curr) => curr._id === video._id
                      )}
                      onChange={() =>
                        ele.videos.find((curr) => curr._id === video._id)
                          ? deleteFromPlaylist(ele._id, video._id)
                          : addToPlaylist(ele._id, video)
                      }
                    />
                    <span className="filter-name">{ele.title}</span>
                  </label>
                );
              })}
          </div>
          {loading && <Loader small={true} />}

          {!isCreatingPlaylist && (
            <button
              className="btn btn-primary-ol btn-wide"
              onClick={() => setIsCreatingPlaylist(true)}
            >
              create new playlist
            </button>
          )}

          {isCreatingPlaylist && (
            <>
              <h4 className="as-center">Playlist name</h4>
              <label className="as-center">
                <input
                  type="text"
                  value={playlistName}
                  onChange={(e) => setPlaylistName(e.target.value)}
                />
              </label>
              <button
                className="btn btn-primary btn-wide"
                onClick={() => {
                  createPlaylist(playlistName);
                  setPlaylistName("");
                  setIsCreatingPlaylist(false);
                }}
              >
                Create
              </button>
              <button
                className="btn btn-primary-ol btn-wide"
                onClick={() => setIsCreatingPlaylist(false)}
              >
                Cancel
              </button>
            </>
          )}
        </div>
        <i
          modal-btn-for="modal-one"
          className="material-icons modal-close-btn"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          close
        </i>
      </div>
    </div>
  );
}

export { PlaylistsListModal };
