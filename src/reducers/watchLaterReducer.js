import { watchLaterActions } from "./index";

const { SET_WATCH_LATER, SET_LOADING, SET_ERROR } = watchLaterActions;

const watchLaterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_WATCH_LATER:
      return { ...state, watchLater: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export { watchLaterReducer };
