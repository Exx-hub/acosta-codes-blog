import Socials from "./Socials";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Socials isFooter={true} />
      <h4>Alvin Flores Acosta · Copyright © 2023</h4>
      <a href="#">back to top</a>
    </footer>
  );
}

export default Footer;
