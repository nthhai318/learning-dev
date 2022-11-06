"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "moviecard.module.css";

type movies = Array<movie> | null;
type movie = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: Array<number>;
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

const Discover = () => {
  const [movies, setMovies] = useState<movies>(null);
  const [isLoading, setLoading] = useState(false);

  async function getMovie() {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=af91549c37d23b640b67237ab14a5f04&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movies);

  return (
    <>
      <div className="section-header">
        <h1>MOVIE</h1>
      </div>
      <section>
        <div className="movie-grid">
          {!movies
            ? ""
            : movies.map((film, index) => (
                <MovieCard key={index} movie={film} />
              ))}
        </div>
      </section>
    </>
  );
};
export default Discover;

const MovieCard = (props: any) => {
  return (
    <div className="movie-card">
      <h3 className="title">{props.movie.title}</h3>
      <Image
        className="poster"
        loading="lazy"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.movie.poster_path}`}
        alt={`${props.movie.id}`}
        width={220}
        height={330}
      />
      <p className="release">{props.movie.release_date}</p>
      <p className="score">{props.movie.vote_average}</p>
      <p>SUMMARY</p>
      <p className="overview">{props.movie.overview}</p>
    </div>
  );
};
