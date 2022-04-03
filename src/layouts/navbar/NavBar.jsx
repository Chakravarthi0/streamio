import React, { useState, useEffect } from "react";
import { SearchBar } from "../../components/index";
import { useAuth } from "../../context/index";
import { useLocation, Link } from "react-router-dom";
import { SideNav } from "./SideNav";
import "./navbar.css";
function NavBar() {
  const {
    signOut,
    authState: { token },
  } = useAuth();
  const { pathname } = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsNavOpen(false);
  }, [pathname]);

  const toggleIsOpen = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className="navbar-container bg-primary">
      <Link to={"/"} className="link">
        <h2 className="nav-logo">Streamio</h2>
      </Link>

      {isNavOpen && (
        <SideNav setIsNavOpen={setIsNavOpen} token={token} signOut={signOut} />
      )}

      {pathname === "/explore" && <SearchBar />}

      <nav>
        <ul className={"list nav-links-container"}>
          {token ? (
            <li>
              <p className="link nav-link" onClick={signOut}>
                Sign Out
              </p>
            </li>
          ) : (
            <li>
              <Link className="link nav-link" to={"/signin"}>
                Sign In
              </Link>
            </li>
          )}
        </ul>
        <i className={"material-icons hamburger-icon"} onClick={toggleIsOpen}>
          {isNavOpen ? "close" : "menu"}
        </i>
      </nav>
    </header>
  );
}
export { NavBar };
