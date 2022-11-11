"use client";

import { use } from "react";
import Image from "next/image";
import styles from "./../movie-card.module.css";
import SearchResult from "../SearchResult";

async function fetchMovieTrending() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=af91549c37d23b640b67237ab14a5f04`,
    { next: { revalidate: 30 } }
  );
  return res.json();
}

const moviesOnTrendingPromise = fetchMovieTrending();

export default function MovieTrending() {
  const data = use(moviesOnTrendingPromise);

  return (
    <>
      <div className={styles["the-one-behind-all"]}></div>
      <div className="section-header">
        <div className={styles["movies-header"]}>
          <h1>MOVIE TRENDING</h1>
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
