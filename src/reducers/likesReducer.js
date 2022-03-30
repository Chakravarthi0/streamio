import { likesActions } from "./index";

const { SET_LIKES, SET_LOADING, SET_ERROR } = likesActions;

const likesReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case SET_LIKES:
      return { ...state, likes: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export { likesReducer };
