import {
  GET_ALL_MOVIES,
  GET_MOVIES_SEARCH,
  GET_MOVIE_FOR_ID,
} from "./../types/types";

export default function MovieReducer(state, action) {
  //Destructuro type y payload
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_MOVIES:
      return { ...state, movies: payload };

    case GET_MOVIES_SEARCH:
      return { ...state, movies: payload };

    case GET_MOVIE_FOR_ID:
      return { ...state, selectedMovie: payload };
    default:
      return { state };
  }
}
