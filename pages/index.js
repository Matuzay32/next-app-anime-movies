import ListMovies from "../components/ListMovies";
import MoviePorvider from "./../anime movies/providers/MoviePorvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCOLxvch7RLwiDstYyU7wHBDXs6XBnBW3nw&usqp=CAU)",
      }}>
      <MoviePorvider>
        <Header />

        <div className="container ">
          <ListMovies />
        </div>
      </MoviePorvider>
    </div>
  );
}
