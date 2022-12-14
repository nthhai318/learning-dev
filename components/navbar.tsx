import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link id="homebutton" href="/">
        <Image
          src="/logo.png"
          alt="logo"
          id="logo"
          width={40}
          height={40}
          style={{ width: "auto", maxHeight: "100%", aspectRatio: "1/1" }}
        />
      </Link>
      <div id="Navigation">
        <div className="navbutton">
          <Link href="/movie">Movie</Link>
        </div>
        <div className="navbutton">
          <Link href="/trending">Trending</Link>
        </div>
        <div className="navbutton">
          <Link href="/about-me">About Me</Link>
        </div>
      </div>
    </div>
  );
}
