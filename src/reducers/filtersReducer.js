import { filtersActions } from "./index";

const { SET_CATEGORY, SET_SEARCH, SET_SORT, RESET_FILTERS } = filtersActions;

const filtersReducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_SEARCH:
      return { ...state, searchKey: action.payload };
    case SET_SORT:
      return { ...state, sortBy: action.payload };
    case RESET_FILTERS:
      return { ...state, category: "", searchKey: "", sortBy: "" };
    default:
      return state;
  }
};

export { filtersReducer };
