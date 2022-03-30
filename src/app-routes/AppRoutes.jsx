import React from "react";
import { useAuth } from "../context/index";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Explore,
  SingleVideo,
  SignIn,
  SignUp,
  Playlist,
  WatchLater,
  History,
  SinglePlaylist,
  LikedVideos
} from "../pages/index";
import { ProtectedRoutes } from "./ProtectedRoutes";

function AppRoutes() {
  const {
    authState: { token },
  } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/explore" element={<Explore />}></Route>
      <Route path="/videos/:videoId" element={<SingleVideo />}></Route>
      {!token ? (
        <>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </>
      ) : (
        <>
          <Route path="/signup" element={<Navigate replace to="/" />}></Route>
          <Route path="/signin" element={<Navigate replace to="/" />}></Route>
        </>
      )}

      <Route element={<ProtectedRoutes />}>
        <Route path="/playlist" element={<Playlist />}></Route>
        <Route path="/single-playlist" element={<SinglePlaylist />}></Route>
        <Route path="/watchlater" element={<WatchLater />}></Route>
        <Route path="/liked" element={<LikedVideos />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
