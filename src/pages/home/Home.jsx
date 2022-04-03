import React from "react";
import { Chips } from "../../components/index";
import { useVideos, useCategory } from "../../context/index";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const { categories } = useCategory();

  return (
    <div className="homepage-container">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(/assests/wave.svg)` }}
      >
        <div className="hero-content">
          <h1 className="app-name">Streamio</h1>
          <p className="hero-description">The entertainment hub</p>
          <button
            className="btn btn-primary black"
            onClick={() => navigate("/explore")}
          >
            Watch
          </button>
        </div>
        <div className="category-list-container home-category">
          {categories.map((ele) => (
            <Chips isFromHome={true} name={ele.categoryName} key={ele._id}>
              {ele.categoryName}
            </Chips>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Home };
