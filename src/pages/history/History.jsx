import React from "react";
import { VideoCardWithDelete } from "../../components/index";
import { useHistory } from "../../context/index";
import "./history.css";

function History() {
  const { history, removeFromHistory, deleteHistory } = useHistory();
  return (
    <div className="history-page-container">
      <div className="page-head">
        <h1 className="page-title">History</h1>
        <button className="btn btn-primary black" onClick={deleteHistory}>
          Clear history
        </button>
      </div>
      <div className="videos-container">
        {history.map((video) => (
          <VideoCardWithDelete
            key={video._id}
            video={video}
            onDelete={() => removeFromHistory(video._id)}
          />
        ))}
      </div>
    </div>
  );
}

export { History };
