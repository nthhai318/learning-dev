"use client";

import MovieCard from "./MovieCard";
import type { movie } from "./page";
import styles from "./movie-card.module.css";
import { useState } from "react";
import SearchIcon from "../../components/SearchIcon";

function SearchResult(props: any) {
  const [searchKey, setSearchKey] = useState("");
  const results = props.data.results.filter((m: movie) => {
    return (m.title + m.overview + m.release_date)
      .toUpperCase()
      .includes(searchKey.toUpperCase());
  });

  return (
    <>
      <div className={styles["search-bar-wrapper"]}>
        <div className={styles["search-bar"]}>
          <input
            className={styles["movie-search-bar"]}
            type="text"
            placeholder="Search movies"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
          <span className={styles["search-icon"]}>
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className={styles["movie-grid"]}>
        {!results
          ? ""
          : results.map((film: movie, index?: number) => (
              <MovieCard key={index} movie={film} />
            ))}
      </div>
    </>
  );
}

export default SearchResult;
