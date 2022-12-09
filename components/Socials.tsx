import Link from "next/link";
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
      <Link href="https://www.facebook.com/alvinfloresacosta" target="_blank">
        <FaFacebookF
          className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/alvin-acosta/" target="_blank">
        <FaLinkedinIn
          className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
        />
      </Link>
      <Link href="https://github.com/Exx-hub" target="_blank">
        <FaGithub
          className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
        />
      </Link>
      <Link href="https://gitlab.com/Exx-hub" target="_blank">
        <FaGitlab
          className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
        />
      </Link>
      <Link
        href="https://www.codegrepper.com/profile/alvin-acosta"
        target="_blank"
      >
        <FaLaptopCode
          className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
        />
      </Link>
    </section>
  );
}

export default Socials;
