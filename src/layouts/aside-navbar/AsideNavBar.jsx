import React from "react";
import { Link } from "react-router-dom";
import "./aside-navbar.css";

function AsideNavBar() {
  return (
    <aside className="aside-navbar">
      <ul className="list aside-nav-links-container">
        <li>
          <Link className="link aside-nav-link" to={"/explore"}>
            <i className="fas fa-compass"></i>
            <span>Explore</span>
          </Link>
        </li>

        <li>
          <Link className="link aside-nav-link" to={"/playlist"}>
            <i className="fas fa-folder-plus"></i>
            <span>Playlist</span>
          </Link>
        </li>

        <li>
          <Link className="link aside-nav-link" to={"/liked"}>
            <i class="fas fa-thumbs-up" aria-hidden="true"></i>
            <span>Liked videos</span>
          </Link>
        </li>
        <li>
          <Link className="link aside-nav-link" to={"/watchlater"}>
            <i className="fas fa-clock"></i>
            <span>Watch Later</span>
          </Link>
        </li>
        <li>
          <Link className="link aside-nav-link" to={"/history"}>
            <i className="fas fa-history"></i>
            <span>History</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export { AsideNavBar };
