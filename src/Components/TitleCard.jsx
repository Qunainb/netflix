import { useEffect, useState } from "react";
import cards_data from "../Cards_data";

import "../Components/TitleCard.css";

export default function TitleCard({ title, category }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${
          category ? category : "now_playing"
        }?api_key=49e3eeb2de046fc49ad4b9392a92ddee`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list">
        {movies.map((movie, index) => (
          <div className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
