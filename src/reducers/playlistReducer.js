import { playlistActions } from "./index";

const { SET_PLAYLISTS, SET_PLAYLIST, SET_LOADING, SET_ERROR } = playlistActions;

const playlistReducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYLISTS:
      return { ...state, playlists: action.payload };
    case SET_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((ele) =>
          ele._id === action.payload._id ? action.payload : ele
        ),
      };

    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export { playlistReducer };
