import React from 'react'
import { VideoCard } from "../../components/index";
import {videos} from "../../backend/db/videos"
import "./explore.css"

function Explore() {
  return (
      <div className="videos-container explore-container">
        {videos.map(video => <VideoCard key={video._id} video={video} />)}
        {videos.map(video => <VideoCard key={video._id} video={video} />)}
        {videos.map(video => <VideoCard key={video._id} video={video} />)}
      </div>
  )
}

export {Explore}