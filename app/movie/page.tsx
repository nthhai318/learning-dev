import styles from "./movie-card.module.css";
import SearchResult from "./SearchResult";
import Image from "next/image";

export type movie = {
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
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export default async function Discover() {
  const data = await getMovies();

  return (
    <>
      <div className={styles["the-one-behind-all"]}></div>
      <div className="section-header">
        <div className={styles["movies-header"]}>
          <h1>MOVIE</h1>
          <div className={styles["sponsor-logo"]}>
            <span>WITH</span>
            <Image
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
              width={"1000"}
              height={"1000"}
              style={{ height: "1.5rem", width: "auto" }}
            />
          </div>
        </div>
      </div>
      <SearchResult data={data} />
    </>
  );
}

async function getMovies() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=af91549c37d23b640b67237ab14a5f04&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate`
  );
  return res.json();
}
