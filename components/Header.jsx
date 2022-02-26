import React, { useContext } from "react";
import MovieContext from "../anime movies/context/MovieContext";
import Link from "next/link";

export default function Header() {
  const { inputChange, busqueda, getMovieForSearch } = useContext(MovieContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark   d-flex justify-content-center mb-4">
      <div className="m-4 p-4" style={{ width: "300px" }}>
        s<Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>
      </div>

      <input
        className="rounded-pill p-2"
        value={busqueda}
        onChange={(e) => inputChange(e)}
        style={{
          width: "300px",
          height: "40px",
        }}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        value={busqueda}
        onClick={(e) => getMovieForSearch(e.target.value)}
        className="btn btn-outline-info m-3 "
        type="submit">
        Buscar
      </button>
    </nav>
  );
}
