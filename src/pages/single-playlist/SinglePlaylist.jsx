import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  VideoCardWithDelete,
  LoadingError,
  Loader,
} from "../../components/index";
import { usePlaylist } from "../../context/index";
import "./single-playlist.css";

function SinglePlaylist() {
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const {
    playlistsState: { playlists, loading, error },
    deleteFromPlaylist,
    deletePlaylist,
  } = usePlaylist();
  const playlist = playlists.find((ele) => ele._id === playlistId);
  console.log(playlist);
  return (
    <div className="history-page-container">
      {playlist && (
        <>
          <div className="page-head">
            <h1 className="page-title">{playlist?.title}</h1>
            <button
              className="btn btn-primary black"
              onClick={() => {
                deletePlaylist(playlist?._id);
                navigate("/playlists");
              }}
            >
              Delete playlist
            </button>
          </div>
          {!loading && (
            <div className="videos-container">
              {playlist?.videos.map((video) => (
                <VideoCardWithDelete
                  key={video._id}
                  video={video}
                  onDelete={() => deleteFromPlaylist(playlist?._id, video._id)}
                />
              ))}
            </div>
          )}
        </>
      )}
      {loading && <Loader />}
      {playlist && playlist.videos.length === 0 && (
        <h2 className="text-center">This playlist does not have any video</h2>
      )}
      {!loading && (!playlist || error) && <LoadingError />}
    </div>
  );
}

export { SinglePlaylist };
