"use client";

import {
  faFacebook,
  faTwitter,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const LogoLinks = () => {
  return (
    <p>
      Check me out via{" "}
      <Link href="https://www.facebook.com/ngo.t.hai.97">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" width="20" />
      </Link>{" "}
      <Link href="https://twitter.com/HaiNgo87853620">
        <FontAwesomeIcon icon={faTwitter} className="social-icon" width="20" />
      </Link>{" "}
      <Link href="https://github.com/nthhai318">
        <FontAwesomeIcon icon={faGit} className="social-icon" width="20" />
      </Link>{" "}
    </p>
  );
};
