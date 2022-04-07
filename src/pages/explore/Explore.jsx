import React from "react";
import {
  VideoCard,
  Loader,
  LoadingError,
  Chips,
  SearchBar,
} from "../../components/index";
import { useVideos, useCategory, useFilters } from "../../context/index";
import { filtersActions } from "../../reducers/index";
import "./explore.css";

function Explore() {
  const { categories } = useCategory();
  const { videos, isLoading, error } = useVideos();

  const {
    filtersState: { sortBy, category, searchKey },
    filtersDispatch,
  } = useFilters();
  const { SET_SORT } = filtersActions;

  const filterVideos = () => {
    let res = videos.slice();
    if (category !== "") {
      res = res.filter((ele) => ele.catgeory === category);
    }

    if (searchKey !== "") {
      res = res.filter(
        (ele) =>
          ele.title.toLowerCase().includes(searchKey.toLowerCase()) ||
          ele.channel.toLowerCase().includes(searchKey.toLowerCase())
      );
    }
    if (sortBy === "ascending") {
      res = res.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
      console.log("des After sort...", res);
    } else if (sortBy === "descending") {
      res = res.sort((a, b) => new Date(a.uploadDate) - new Date(b.uploadDate));
      console.log("asc After sort...", res);
    }
    return res;
  };

  const filteredVideos = filterVideos();

  return (
    <div className="explore-container">
      {isLoading && <Loader />}
      {error && <LoadingError />}

      {!isLoading && <SearchBar fromExplorePage={true} />}

      <div className="filter-container">
        <div className="category-list-container explore-category-list">
          {!isLoading && (
            <Chips name={""} key={"all"}>
              All
            </Chips>
          )}
          {categories.map((ele) => (
            <Chips name={ele.categoryName} key={ele._id}>
              {ele.categoryName}
            </Chips>
          ))}
        </div>

        {!isLoading && (
          <div className="sort-container">
            <label htmlFor="sortBy">Sort </label>

            <select
              name="sortBy"
              value={sortBy}
              onChange={(e) =>
                filtersDispatch({ type: SET_SORT, payload: e.target.value })
              }
            >
              <option value="">-</option>
              <option value="ascending">Latest video first</option>
              <option value="descending">Oldest video first</option>
            </select>
          </div>
        )}
      </div>

      {filteredVideos.length > 0 && (
        <div className="videos-container explore-container">
          {filteredVideos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}

export { Explore };
