import React,{useState} from "react";
import "./video-card.css";

function VideoCard({ video }) {

    const [isModalOpen,setIsModalOpen] = useState(false);

  const { _id, title, channel, channelAvatar, views, duration } = video;


  const toggleModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="video-card">
      <div className="image-container">
        <img
          className="video-img img-responsive"
          src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
          alt={title}
        />
        <span className="duration bg-black white">{duration}</span>
      </div>
      <div className="video-detail">
        <img className="channel-avatar" src={channelAvatar} alt={channel} />
        <div className="about">
          <div>{title}</div>
          <div>{channel}</div>
        </div>
        <div className="action-icon" onClick={toggleModal}>
          <i className="fas fa-ellipsis-v"></i>
          </div>
      </div>
     { isModalOpen && <div className="video-actions bg-white-pure">
        <ul className="list video-actions-list">
          <li className="video-action">
            <i className="fas fa-clock"></i>
            <span>Save to watch Later</span>
          </li>
          <li className="video-action">
            <i className="fas fa-folder-plus"></i>
            <span>Save to playlist</span>
          </li>
        </ul>
      </div>}
    </div>
  );
}

export { VideoCard };
