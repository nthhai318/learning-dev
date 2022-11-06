import Image from "next/image";
import styles from "./movie-card.module.css";

const MovieCard = (props: any) => {
  return (
    <div className={styles["movie-card"]}>
      {/* <Image
        className={styles["poster"]}
        loading="lazy"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.movie.poster_path}`}
        alt={`${props.movie.id}`}
        width={220}
        height={330}
      /> */}
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.movie.poster_path}`}
        className={styles["poster"]}
      />

      <p className={styles["title"]}>{props.movie.title}</p>
      <p className={styles["release"]}>
        Release Date: {props.movie.release_date}
      </p>
      <p className={styles["score"]}>{props.movie.vote_average}</p>
      <p>SUMMARY</p>
      <p className={styles["overview"]}>{props.movie.overview}</p>
    </div>
  );
};

export default MovieCard;
