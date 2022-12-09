import Link from "next/link";
import Socials from "./Socials";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Socials isFooter={true} />
      <h4>Alvin Flores Acosta · Copyright © 2022</h4>
      <Link href="#">back to top</Link>
    </footer>
  );
}

export default Footer;
