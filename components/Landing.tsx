import Socials from "./Socials";
import { FaChevronCircleDown } from "react-icons/fa";

import styles from "../styles/Landing.module.css";

function Landing() {
  return (
    <section className={styles.mainContainer}>
      <section className={styles.mainContent}>
        <h1>ALVIN ACOSTA</h1>
        <p>
          I am a Manila-based full-time <span>ReactJs Developer</span>
          ..freelance <span>Full Stack Developer</span>.
        </p>

        <Socials isFooter={false} />
      </section>

      <a href={"#about"} className={styles.downIcon}>
        <FaChevronCircleDown />
      </a>
    </section>
  );
}

export default Landing;
