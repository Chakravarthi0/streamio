import React from "react";
import "./single-video.css";

const video = {
  _id: "LWGJA9i18Co",
  title: "OK Go - Upside Down & Inside Out",
  catgeory: "music",
  channel: "OK GO",
  channelAvatar:
    "https://yt3.ggpht.com/ytc/AKedOLSCQ6pK5TeOXaz80HS0DnvU7TviedNfc70eHPpsXA=s88-c-k-c0x00ffffff-no-rj",
  views: "12M",
  duration: "3:22",
  createdAt: "2 years",
};

function SingleVideo() {
  const { _id, title, channel, channelAvatar, views, createdAt } = video;
  return (
    <div className="single-video">
      <div className="video-iframe-container">
        <iframe
          src={`https://www.youtube.com/embed/${_id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
      </div>

      <h3>{title}</h3>
      <div className="meta">
        <span>{views}</span> |<span> {createdAt} ago</span>
      </div>
      <div className="single-video-actions">
        <i class="fas fa-thumbs-up" aria-hidden="true"></i>
        <i class="fas fa-thumbs-down" aria-hidden="true"></i>
        <i class="fas fa-folder-plus" aria-hidden="true"></i>
      </div>
      <div className="channel-detail">
        <img className="channel-avatar" src={channelAvatar} alt={channel} />
        <span>{channel}</span>
      </div>
    </div>
  );
}

export { SingleVideo };
