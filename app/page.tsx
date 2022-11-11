import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="section-header">
        <h1>Welcome to My Page</h1>
      </div>
      <section>
        <p className={styles["brief"]}>
          This is where I experiment with Nextjs latest features
        </p>
        <div className={styles.container}>
          <div className={styles.grid}>
            <Link href="/about-me" className={styles.card}>
              <h2>Hai &rarr;</h2>
              <p>About me</p>
            </Link>
            <Link href="/movie" className={styles.card}>
              <h2>Movie &rarr;</h2>
              <p>Movies to recommend</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
