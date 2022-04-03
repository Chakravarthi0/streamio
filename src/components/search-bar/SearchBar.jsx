import React from "react";
import { useFilters } from "../../context/index";
import { filtersActions } from "../../reducers/index";
import "./search-bar.css";

function SearchBar({ fromExplorePage }) {
  const {
    filtersState: { searchKey },
    filtersDispatch,
  } = useFilters();

  return (
    <div
      className={
        `nav-search-container nav-search icon ` +
        (fromExplorePage ? "explore-nav" : "")
      }
    >
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        className="nav-search-input"
        placeholder="Search"
        value={searchKey}
        onChange={(e) =>
          filtersDispatch({
            type: filtersActions.SET_SEARCH,
            payload: e.target.value,
          })
        }
      />
    </div>
  );
}

export { SearchBar };
