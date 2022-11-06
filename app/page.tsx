import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="section-header">
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </div>
      <main className={styles.container}>
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
      </main>
    </>
  );
}
