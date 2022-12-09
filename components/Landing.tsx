import Socials from "./Socials";
import { FaChevronCircleDown } from "react-icons/fa";

import styles from "../styles/Landing.module.css";
import Link from "next/link";
import Typed from "react-typed";

function Landing() {
  return (
    <section className={styles.mainContainer}>
      <section className={styles.mainContent}>
        <h1>ALVIN ACOSTA</h1>
        <p>
          I am a Manila-based full-time{" "}
          <span>
            <Typed
              strings={["ReactJs Developer"]}
              loop
              typeSpeed={100}
              backSpeed={180}
            />
          </span>
          ..freelance <span>Full Stack Developer</span>.
        </p>
        <p className={styles.plugin}>
          Welcome to my Blog! You can also view my Portfolio{" "}
          <Link href={"/"}>here</Link>.
        </p>
        <Socials isFooter={false} />
      </section>

      <Link href={"#blog"} className={styles.downIcon}>
        <FaChevronCircleDown />
      </Link>
    </section>
  );
}

export default Landing;