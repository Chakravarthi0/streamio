import React, { useState } from "react";
import { useHistory, useAuth } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { PlaylistsListModal } from "../index";
import "./video-card.css";

function VideoCard({ video }) {
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();
  const { addToHistory } = useHistory();

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { _id, title, channel, channelAvatar, views, duration, created } =
    video;

  const toggleModal = () => {
    setIsOptionsOpen((prev) => !prev);
  };

  const clickHandler = () => {
    if (token) {
      addToHistory(video);
    }
    navigate(`/videos/${_id}`);
  };

  return (
    <div className="video-card">
      {isModalOpen && (
        <PlaylistsListModal setIsModalOpen={setIsModalOpen} video={video} />
      )}
      <div className="image-container">
        <img
          className="video-img img-responsive"
          src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
          alt={title}
          onClick={clickHandler}
        />
        <span className="duration bg-black white">{duration}</span>
      </div>
      <div className="video-detail">
        <img className="channel-avatar" src={channelAvatar} alt={channel} />
        <div className="about">
          <div className="video-card-title">{title}</div>
          <div className="meta-data">{channel}</div>
          <div className="flex align-center">
            <div className="meta-data">{views} views</div> |
            <div className="meta-data">{created} ago</div>
          </div>
        </div>

        <div className="action-icon" onClick={toggleModal}>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      {isOptionsOpen && (
        <div className="video-actions bg-white-pure">
          <ul className="list video-actions-list">
            <li className="video-action">
              <i className="fas fa-clock"></i>
              <span>Save to watch Later</span>
            </li>
            <li
              className="video-action"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              <i className="fas fa-folder-plus"></i>
              <span>Save to playlist</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export { VideoCard };
