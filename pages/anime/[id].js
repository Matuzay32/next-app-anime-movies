import React from "react";
import { useRouter } from "next/router";
import MovieIndividual from "../../components/MovieIndividual";
import Header from "./../../components/Header";
import MoviePorvider from "../../anime movies/providers/MoviePorvider";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MovieProfile(props) {
  const router = useRouter();

  const { id } = router.query;

  console.log(id);

  return (
    <div>
      <MoviePorvider>
        <Header />
        <MovieIndividual movie={props} />
      </MoviePorvider>
    </div>
  );
}

MovieProfile.getInitialProps = async (ctx) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${ctx.query.id}`);

  const resJson = await res.json();
  const { data } = resJson;
  console.log(data);

  return data;
};
