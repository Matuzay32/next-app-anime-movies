import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
export default function MovieIndividual({ movie }) {
  const [mostratInfo, seMostrarInfo] = useState(false);
  const mostrarInfoData = () => {
    seMostrarInfo(!mostratInfo);
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png)",
      }}
      className="container-fluid p-4 d-flex justify-content-center">
      <div className="card" style={{ width: "50rem" }}>
        <img
          className="card-img-top"
          src={movie.images.jpg.large_image_url}
          alt="Card image cap"
        />
        <div className="card-body">
          <h1 className="card-title">{movie.title}</h1>
          <p className="card-text">{movie.background}</p>
        </div>
        <ul className="list-group list-group-flush">
          <h3 className="list-group-item">{` ${movie.aired.string}`}</h3>
          <h3 className="list-group-item">{`Rank : ${movie.rank}`}</h3>
          <h4 className="list-group-item">{`Duration : ${movie.duration}`}</h4>
          {mostratInfo && (
            <h4 className="list-group-item">{`Duration : ${movie.synopsis}`}</h4>
          )}
        </ul>
        <div className="card-body">
          <button
            type="button"
            onClick={() => mostrarInfoData()}
            class="btn btn-primary">
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
}

// {
//     "mal_id": 8,
//     "url": "https://myanimelist.net/anime/8/Bouken_Ou_Beet",
//     "images": {
//         "jpg": {
//             "image_url": "https://cdn.myanimelist.net/images/anime/7/21569.jpg",
//             "small_image_url": "https://cdn.myanimelist.net/images/anime/7/21569t.jpg",
//             "large_image_url": "https://cdn.myanimelist.net/images/anime/7/21569l.jpg"
//         },
//         "webp": {
//             "image_url": "https://cdn.myanimelist.net/images/anime/7/21569.webp",
//             "small_image_url": "https://cdn.myanimelist.net/images/anime/7/21569t.webp",
//             "large_image_url": "https://cdn.myanimelist.net/images/anime/7/21569l.webp"
//         }
//     },
//     "trailer": {
//         "youtube_id": null,
//         "url": null,
//         "embed_url": null,
//         "images": {
//             "image_url": null,
//             "small_image_url": null,
//             "medium_image_url": null,
//             "large_image_url": null,
//             "maximum_image_url": null
//         }
//     },
//     "title": "Bouken Ou Beet",
//     "title_english": "Beet the Vandel Buster",
//     "title_japanese": "冒険王ビィト",
//     "title_synonyms": [
//         "Adventure King Beet"
//     ],
//     "type": "TV",
//     "source": "Manga",
//     "episodes": 52,
//     "status": "Finished Airing",
//     "airing": false,
//     "aired": {
//         "from": "2004-09-30T00:00:00+00:00",
//         "to": "2005-09-29T00:00:00+00:00",
//         "prop": {
//             "from": {
//                 "day": 30,
//                 "month": 9,
//                 "year": 2004
//             },
//             "to": {
//                 "day": 29,
//                 "month": 9,
//                 "year": 2005
//             }
//         },
//         "string": "Sep 30, 2004 to Sep 29, 2005"
//     },
//     "duration": "23 min per ep",
//     "rating": "PG - Children",
//     "score": 6.96,
//     "scored_by": 5608,
//     "rank": 3976,
//     "popularity": 4730,
//     "members": 14088,
//     "favorites": 14,
//     "synopsis": "It is the dark century and the people are suffering under the rule of the devil, Vandel, who is able to manipulate monsters. The Vandel Busters are a group of people who hunt these devils, and among them, the Zenon Squad is known to be the strongest busters on the continent. A young boy, Beet, dreams of joining the Zenon Squad. However, one day, as a result of Beet's fault, the Zenon squad was defeated by the devil, Beltose. The five dying busters sacrificed their life power into their five weapons, Saiga. After giving their weapons to Beet, they passed away. Years have passed since then and the young Vandel Buster, Beet, begins his adventure to carry out the Zenon Squad's will to put an end to the dark century.",
//     "background": null,
//     "season": "fall",
//     "year": 2004,
//     "broadcast": {
//         "day": "Thursdays",
//         "time": "18:30",
//         "timezone": "Asia/Tokyo",
//         "string": "Thursdays at 18:30 (JST)"
//     },
//     "producers": [
//         {
//             "mal_id": 16,
//             "type": "anime",
//             "name": "TV Tokyo",
//             "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
//         },
//         {
//             "mal_id": 53,
//             "type": "anime",
//             "name": "Dentsu",
//             "url": "https://myanimelist.net/anime/producer/53/Dentsu"
//         },
//         {
//             "mal_id": 2262,
//             "type": "anime",
//             "name": "Illumitoon Entertainment",
//             "url": "https://myanimelist.net/anime/producer/2262/Illumitoon_Entertainment"
//         }
//     ],
//     "licensors": [],
//     "studios": [
//         {
//             "mal_id": 18,
//             "type": "anime",
//             "name": "Toei Animation",
//             "url": "https://myanimelist.net/anime/producer/18/Toei_Animation"
//         }
//     ],
//     "genres": [
//         {
//             "mal_id": 2,
//             "type": "anime",
//             "name": "Adventure",
//             "url": "https://myanimelist.net/anime/genre/2/Adventure"
//         },
//         {
//             "mal_id": 10,
//             "type": "anime",
//             "name": "Fantasy",
//             "url": "https://myanimelist.net/anime/genre/10/Fantasy"
//         },
//         {
//             "mal_id": 37,
//             "type": "anime",
//             "name": "Supernatural",
//             "url": "https://myanimelist.net/anime/genre/37/Supernatural"
//         }
//     ],
//     "explicit_genres": [],
//     "themes": [],
//     "demographics": [
//         {
//             "mal_id": 27,
//             "type": "anime",
//             "name": "Shounen",
//             "url": "https://myanimelist.net/anime/genre/27/Shounen"
//         }
//     ]
// }
