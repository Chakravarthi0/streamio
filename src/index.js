import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  VideosProvider,
  CategoryProvider,
  HistoryProvider,
  LikesProvider,
  PlaylistProvider,
  WatchLaterProvider,
} from "./context/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideosProvider>
          <HistoryProvider>
            <LikesProvider>
              <PlaylistProvider>
                <WatchLaterProvider>
                  <CategoryProvider>
                    <App />
                  </CategoryProvider>
                </WatchLaterProvider>
              </PlaylistProvider>
            </LikesProvider>
          </HistoryProvider>
        </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
