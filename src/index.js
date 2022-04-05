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
  FiltersProvider,
} from "./context/index";
import { Toaster } from "react-hot-toast";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Toaster position="top-center" />
      <AuthProvider>
        <VideosProvider>
          <HistoryProvider>
            <LikesProvider>
              <PlaylistProvider>
                <WatchLaterProvider>
                  <CategoryProvider>
                    <FiltersProvider>
                      <App />
                    </FiltersProvider>
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
