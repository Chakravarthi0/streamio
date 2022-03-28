import React from "react";
import { Chips, VideoCard } from "../../components/index";
import {videos} from "../../backend/db/videos"
import {categories} from "../../backend/db/categories"
import "./home.css";

function Home() {
  return (
    <div className="homepage-container">
      <div className="category-list-container">
        {categories.map(ele => <Chips>{ele.categoryName}</Chips>)}
      </div>

      <div className="videos-container">
        {videos.map(video => <VideoCard key={video._id} video={video} />)}
        {videos.map(video => <VideoCard key={video._id} video={video} />)}
        {videos.map(video => <VideoCard key={video._id} video={video} />)}
      </div>
    </div>
  );
}

export { Home };
