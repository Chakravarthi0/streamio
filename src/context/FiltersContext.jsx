import React, { createContext, useContext, useReducer } from "react";
import { filtersReducer } from "../reducers/index";

const filtersContext = createContext();

const useFilters = () => useContext(filtersContext);

function FiltersProvider({ children }) {
  const [filtersState, filtersDispatch] = useReducer(filtersReducer, {
    category: "",
    searchKey: "",
    sortBy: "",
  });

  return (
    <filtersContext.Provider value={{ filtersState, filtersDispatch }}>
      {children}
    </filtersContext.Provider>
  );
}

export { FiltersProvider, useFilters };
