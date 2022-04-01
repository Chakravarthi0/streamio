import React, { useState } from "react";
import { PlaylistsListModal } from "../../components/index";
import { useParams, useNavigate } from "react-router-dom";
import { useVideos, useLikes, useAuth } from "../../context/index";
import "./single-video.css";

function SingleVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    authState: { token },
  } = useAuth();
  const { videos } = useVideos();

  const {
    likesState: { likes },
    addToLikes,
    removeFromLikes,
  } = useLikes();

  const { videoId } = useParams();

  const navigate = useNavigate();

  const video = videos.find((video) => video._id === videoId);

  const isLiked = likes.find((ele) => ele._id === videoId);

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
              <i className="fas fa-clock gray pointer" aria-hidden="true"></i>
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

          <div className="notes-container">
            <h2 className="text-center">Notes</h2>
            <input
              className="input note-input"
              type={"text"}
              placeholder={"Title"}
            />
            <textarea className="input note-input note-text-area"></textarea>

            <button className="btn btn-primary black">Add Note</button>

            <div className="card">
              <p className="card-title text-center">Title</p>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                in consequuntur quis.
              </p>
            </div>
            <div className="card">
              <p className="card-title text-center">Title</p>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                in consequuntur quis.
              </p>
            </div>
          </div>
        </div>
      )}

      <div></div>
    </div>
  );
}

export { SingleVideo };
