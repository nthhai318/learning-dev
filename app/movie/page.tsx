import MovieCard from "./MovieCard";
import styles from "./movie-card.module.css";
import useState from "react";

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

export default async function Discover() {
  const data = await getMovies();
  // const [searchKey, setSearchKey] = useState<string>(null);

  return (
    <>
      <div className={styles["the-one-behind-all"]}></div>
      <div className="section-header">
        <h1>MOVIE</h1>
      </div>
      <section>
        <div>
          {/* <input
            className={styles["search-bar"]}
            type="text"
            placeholder="Search Movies"
            // value=""
          /> */}
        </div>
        <div className={styles["movie-grid"]}>
          {!data.results
            ? ""
            : data.results.map((film: movie, index?: number) => (
                <MovieCard key={index} movie={film} />
              ))}
        </div>
      </section>
    </>
  );
}

export async function getMovies() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=af91549c37d23b640b67237ab14a5f04&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate`
  );
  return res.json();
}
