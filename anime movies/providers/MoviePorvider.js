import { useRouter } from "next/router";
import React, { useReducer, useState } from "react";

import Router from "next/router";

//AXIOS
import axios from "axios";

//CONTEXTO
import MovieContext from "./../context/MovieContext";

//IMPORT TYPES

import {
  GET_ALL_MOVIES,
  GET_MOVIES_SEARCH,
  GET_MOVIE_FOR_ID,
} from "../types/types";
import MovieReducer from "../reducers/MovieReducer";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function MoviePorvider({ children }) {
  const router = useRouter();
  const initialMovies = {
    movies: [],
    selectedMovie: null,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialMovies);

  //estado de busqueda
  const [busqueda, setBusqueda] = useState("");

  //trae todas las pelis con use efect en Movie List
  const getAllMovies = async () => {
    //fetch con axios
    const res = await axios.get("https://api.jikan.moe/v4/anime");

    //dispatch
    dispatch({
      type: GET_ALL_MOVIES,
      payload: res.data.data,
    });

    // console.log(res.data.data);
  };
  //trae solamente las peliculas segun la search

  const getMovieForSearch = async (q) => {
    console.log(router);
    //fetch con axios
    const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${q}&sfw`);

    //la query viene desde el header
    console.log(q);

    dispatch({ type: GET_MOVIES_SEARCH, payload: res.data.data });
  };

  //input search del Header
  const inputChange = ({ target }) => {
    setBusqueda(target.value);
  };

  const funcionParaEnrutarSegunElId = (id) => {
    console.log(id);

    router.push(`/anime/${id}`);
  };
  return (
    <MovieContext.Provider
      /* value le estoy pasando un obj  de usuarios con los propiedades del estado*/

      value={{
        getAllMovies,
        getMovieForSearch,
        inputChange,
        funcionParaEnrutarSegunElId,
        movies: state.movies,
        selectedMovie: state.selectedMovie,
        busqueda,
      }}>
      {children}
    </MovieContext.Provider>
  );
}
