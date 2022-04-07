import React from "react";
import { NavLink } from "react-router-dom";

function SideNav({ setIsNavOpen, token, signOut }) {
  return (
    <div className="side-navbar">
      <button
        className="btn btn-primary-ol btn-float side-close-btn"
        onClick={() => setIsNavOpen(false)}
      >
        <i className="material-icons">close</i>
      </button>

      <nav className="list side-nav-links-container">
        {token === "" ? (
          <NavLink className="link nav-link" to={"/signin"}>
            Sign In
          </NavLink>
        ) : (
          <NavLink
            className="link nav-link"
            onClick={() => {
              setIsNavOpen(false);
              signOut();
            }}
            to={"/"}
          >
            Sign Out
          </NavLink>
        )}

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "link side-nav-link active-aside-link"
              : "link side-nav-link gray"
          }
          to={"/explore"}
        >
          <i className="fas fa-compass"></i>
          <span>Explore</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "link side-nav-link active-aside-link"
              : "link side-nav-link gray"
          }
          to={"/playlists"}
        >
          <i className="fas fa-folder-plus"></i>
          <span>Playlist</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "link side-nav-link active-aside-link"
              : "link side-nav-link gray"
          }
          to={"/liked"}
        >
          <i className="fas fa-thumbs-up" aria-hidden="true"></i>
          <span>Liked videos</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "link side-nav-link active-aside-link"
              : "link side-nav-link gray"
          }
          to={"/watchlater"}
        >
          <i className="fas fa-clock"></i>
          <span>Watch Later</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "link side-nav-link active-aside-link"
              : "link side-nav-link gray"
          }
          to={"/history"}
        >
          <i className="fas fa-history"></i>
          <span>History</span>
        </NavLink>
      </nav>
    </div>
  );
}

export { SideNav };
