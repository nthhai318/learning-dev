import Image from "next/image";
import StarIcon from "../../components/RatingIcon";
import styles from "./movie-card.module.css";
import Link from "next/link";

const MovieCard = (props: any) => {
  return (
    <Link href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
      <div className={styles["movie-card"]}>
        <Image
          className={styles["poster"]}
          loading="lazy"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.movie.poster_path}`}
          alt={`${props.movie.id}`}
          width={220}
          height={330}
        />
        <p className={styles["title"]}>{props.movie.title}</p>
        <div className={styles["info"]}>
          <p className={styles["release"]}>
            Release Date: {props.movie.release_date}
          </p>
          <p className={styles["score"]}>
            {props.movie.vote_average}
            <StarIcon />
          </p>
          <p>SUMMARY</p>
          <p className={styles["overview"]}>
            {`${props.movie.overview.substring(0, 120)}...`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
