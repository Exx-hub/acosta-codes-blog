import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaLaptopCode,
  FaGitlab,
} from "react-icons/fa";
import styles from "../styles/Socials.module.css";

function Socials() {
  return (
    <section className={styles.icons}>
      <FaFacebookF className={styles.icon} />
      <FaLinkedinIn className={styles.icon} />
      <FaGithub className={styles.icon} />
      <FaGitlab className={styles.icon} />
      <FaLaptopCode className={styles.icon} />
    </section>
  );
}

export default Socials;
