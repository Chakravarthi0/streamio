import React from "react";
import { Chips, VideoCard, Loader, LoadingError } from "../../components/index";
import { useVideos, useCategory } from "../../context/index";
import "./home.css";

function Home() {
  const { error, videos, isLoading } = useVideos();
  const { categories } = useCategory();

  return (
    <div className="homepage-container">
      <div className="category-list-container">
        {categories.map((ele) => (
          <Chips key={ele._id}>{ele.categoryName}</Chips>
        ))}
      </div>

      {isLoading && <Loader isFullScreen={true} />}

      {error && <LoadingError />}

      {videos.length > 0 && (
        <div className="videos-container">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}

export { Home };
