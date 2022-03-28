import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Explore, SingleVideo, SignIn, SignUp, Playlist, WatchLater, History, SinglePlaylist } from "../pages/index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/explore" element={<Explore />}></Route>
      <Route path="/video" element={<SingleVideo />}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/playlist" element={<Playlist/>}></Route>
      <Route path="/watchlater" element={<WatchLater/>}></Route>
      <Route path="/history" element={<History/>}></Route>
      <Route path="/single-playlist" element={<SinglePlaylist/>}></Route>
    </Routes>
  );
}

export default AppRoutes;
