import React,{useState} from "react";
import { PlaylistCard, CreatePlaylistModal} from "../../components/index";
import "./playlist.css";

function Playlist() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="playlist-page-container">
      <div className="page-head">
        <h1 className="page-title">Playlist</h1>
        <button className="btn btn-primary black" onClick={() => setIsModalOpen(true)}>Create new playlist</button>
      </div>
      {isModalOpen && <CreatePlaylistModal setIsModalOpen={setIsModalOpen}/>}
      <div className="playlist-cards-container">
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </div>
  );
}

export { Playlist };
