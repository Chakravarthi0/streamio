import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVideos, useLikes, useAuth } from "../../context/index";
import "./single-video.css";

function SingleVideo() {
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
              <i class="fas fa-clock gray" aria-hidden="true"></i>
              <i className="fas fa-folder-plus gray" aria-hidden="true"></i>
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

            <div class="card">
              <p class="card-title text-center">Title</p>
              <p class="card-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                in consequuntur quis.
              </p>
            </div>
            <div class="card">
              <p class="card-title text-center">Title</p>
              <p class="card-description">
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
