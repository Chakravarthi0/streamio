import React, { useState } from "react";
import {
  PlaylistsListModal,
  NoteCard,
  NoteInput,
  Loader,
} from "../../components/index";
import { useParams, useNavigate } from "react-router-dom";
import {
  useVideos,
  useLikes,
  useAuth,
  useWatchLater,
} from "../../context/index";
import { useNotes } from "../../utils";
import "./single-video.css";

function SingleVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    authState: { token },
  } = useAuth();
  const { videos } = useVideos();

  const {
    watchLaterState: { watchLater },
    addToWatchLater,
    removeFromWatchLater,
  } = useWatchLater();
  const {
    likesState: { likes },
    addToLikes,
    removeFromLikes,
  } = useLikes();

  const { videoId } = useParams();

  const navigate = useNavigate();

  const video = videos.find((video) => video._id === videoId);

  const isLiked = likes.find((ele) => ele._id === videoId);

  const isInWatchLater = watchLater.find((item) => item._id === videoId);

  const {
    notesState: { notes, loading: notesLoading },
    createNote,
    deleteNote,
    editNote,
  } = useNotes(videoId);
  return (
    <div className="single-video">
      {isModalOpen && (
        <PlaylistsListModal setIsModalOpen={setIsModalOpen} video={video} />
      )}
      {video && (
        <div className="single-video-body">
          <div>
            <div className="video-iframe-container">
              <iframe
                src={`https://www.youtube.com/embed/${video?._id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              />
            </div>
            <h3>{video?.title}</h3>
            <div className="meta">
              <span>{video?.views} views</span> |
              <span> {video?.created} ago</span>
            </div>
            <div className="single-video-actions">
              <i
                className={
                  `fas pointer fa-thumbs-up ` + (isLiked ? "primary" : "gray")
                }
                aria-hidden="true"
                onClick={
                  token
                    ? isLiked
                      ? () => removeFromLikes(video?._id)
                      : () => addToLikes(video)
                    : () => navigate("/signin")
                }
              ></i>
              <i
                className={
                  `fas fa-clock pointer ` +
                  (isInWatchLater ? "primary" : "gray")
                }
                aria-hidden="true"
                onClick={
                  token
                    ? isInWatchLater
                      ? () => removeFromWatchLater(video?._id)
                      : () => addToWatchLater(video)
                    : () => navigate("/signin")
                }
              ></i>
              <i
                className="fas fa-folder-plus gray pointer"
                aria-hidden="true"
                onClick={() =>
                  token ? setIsModalOpen(true) : navigate("/signin")
                }
              ></i>
            </div>
            <div className="channel-detail">
              <img
                className="channel-avatar"
                src={video?.channelAvatar}
                alt={video?.channel}
              />
              <span>{video?.channel}</span>
            </div>
          </div>

          <div className="notes-section">
            {notesLoading ? (
              <Loader />
            ) : (
              <>
                <NoteInput
                  createNote={createNote}
                  videoId={videoId}
                  token={token}
                />
                <div className="notes-container">
                  {notes.length > 0 &&
                    notes.map((note) => (
                      <NoteCard
                        key={note._id}
                        note={note}
                        editNote={editNote}
                        deleteNote={deleteNote}
                      />
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export { SingleVideo };
