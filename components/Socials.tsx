import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaLaptopCode,
  FaGitlab,
} from "react-icons/fa";
import styles from "../styles/Socials.module.css";

interface SocialsProps {
  isFooter: boolean;
}

function Socials({ isFooter }: SocialsProps) {
  return (
    <section className={styles.icons}>
      <FaFacebookF
        className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
      />
      <FaLinkedinIn
        className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
      />
      <FaGithub
        className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
      />
      <FaGitlab
        className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
      />
      <FaLaptopCode
        className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
      />
    </section>
  );
}

export default Socials;
