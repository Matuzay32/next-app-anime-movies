//import reducer
import React, { useContext, useEffect } from "react";

//import context
import MovieContext from "./../anime movies/context/MovieContext";

//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "next/router";

export default function ListMovies() {
  const { getAllMovies, movies, funcionParaEnrutarSegunElId } =
    useContext(MovieContext);

  const ctx = useContext(MovieContext);

  useEffect(() => {
    getAllMovies();

    return () => {};
  }, []);

  return (
    <div className="row">
      {movies?.map((movie) => {
        return (
          <div key={movie.mal_id} className="col mb-4 ">
            <div className="card " style={{ width: "18rem" }}>
              <img
                style={{ objectFit: "cover" }}
                src={movie.images.jpg.large_image_url}
                alt="movie.title"
              />
              <div className="card-body  overflow-auto">
                <h5 className="card-title">{movie.title}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {movie.episodes >= 2 ? (
                    <h5>{movie.episodes} Episodios</h5>
                  ) : (
                    <h5> {movie.episodes} Episodio</h5>
                  )}
                </li>
              </ul>
              <div className="card-body d-flex justify-content-center">
                {/* <Link href="movieInfo"> */}
                <button
                  onClick={(e) => funcionParaEnrutarSegunElId(movie.mal_id)}
                  style={{ width: "100px" }}
                  type="button"
                  class="btn btn-dark">
                  Ver
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
