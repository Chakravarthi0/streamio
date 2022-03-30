import React from "react";
import { VideoCard, Loader, LoadingError } from "../../components/index";
import { useLikes } from "../../context/index";
import "./liked-videos.css";

function LikedVideos() {
  const {
    likesState: { likes, error, loading },
  } = useLikes();

  return (
    <div>
      <h1 className="page-title text-center">Liked videos</h1>
      {loading && <Loader isFullScreen={true} />}

      {error && <LoadingError />}

      {likes.length > 0 && (
        <div className="videos-container">
          {likes.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}

      {(likes.length === 0 && !error) && <h2 className="text-center">No liked videos</h2>}
    </div>
  );
}

export { LikedVideos };
