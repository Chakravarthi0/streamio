import React from "react";
import { useFilters } from "../../context/index";
import { filtersActions } from "../../reducers/index";
import { useNavigate } from "react-router-dom";
import "./chips.css";

function Chips({ children, name, isFromHome }) {
  const navigate = useNavigate();
  const {
    filtersState: { category },
    filtersDispatch,
  } = useFilters();
  return (
    <span
      className={
        `chips-container ` +
        (!isFromHome && category === name ? "chip-active" : "")
      }
      onClick={() => {
        if (isFromHome) {
          filtersDispatch({ type: filtersActions.RESET_FILTERS });
          navigate("/explore");
        }
        filtersDispatch({ type: filtersActions.SET_CATEGORY, payload: name });
      }}
    >
      {children}
    </span>
  );
}

export { Chips };
