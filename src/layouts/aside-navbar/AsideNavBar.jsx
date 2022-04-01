import React from "react";
import { NavLink } from "react-router-dom";
import "./aside-navbar.css";

function AsideNavBar() {
  return (
    <aside className="aside-navbar">
      <ul className="list aside-nav-links-container">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "link aside-nav-link active-aside-link"
                : "link aside-nav-link gray"
            }
            to={"/"}
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "link aside-nav-link active-aside-link"
                : "link aside-nav-link gray"
            }
            to={"/explore"}
          >
            <i className="fas fa-compass"></i>
            <span>Explore</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "link aside-nav-link active-aside-link"
                : "link aside-nav-link gray"
            }
            to={"/playlists"}
          >
            <i className="fas fa-folder-plus"></i>
            <span>Playlist</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "link aside-nav-link active-aside-link"
                : "link aside-nav-link gray"
            }
            to={"/liked"}
          >
            <i className="fas fa-thumbs-up" aria-hidden="true"></i>
            <span>Liked videos</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "link aside-nav-link active-aside-link"
                : "link aside-nav-link gray"
            }
            to={"/watchlater"}
          >
            <i className="fas fa-clock"></i>
            <span>Watch Later</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "link aside-nav-link active-aside-link"
                : "link aside-nav-link gray"
            }
            to={"/history"}
          >
            <i className="fas fa-history"></i>
            <span>History</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export { AsideNavBar };
