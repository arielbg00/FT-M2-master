
const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetail: {}
};

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    // action = {type: "GET_MOVIES", payload: movies}
    case "GET_MOVIES":
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: action.payload
      };
    case "ADD_MOVIE_FAVORITE":
      return {
        ...state,
        // moviesFavorites: state.moviesFavorites.concat(action.payload)
        moviesFavorites: [...state.moviesFavorites, action.payload]
      };
    case "REMOVE_MOVIE_FAVORITE":
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.id)
      };
    default:
      return {...state};
  }
}