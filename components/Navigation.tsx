import Link from "next/link";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import styles from "../styles/Navigation.module.css";
import ThemeChanger from "./ThemeChanger";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href={"/"}>
          <p>
            acosta.<span>codes</span>
          </p>
        </Link>
        <FaCaretDown
          className={styles.menuToggle}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      </div>

      <nav className={styles.nav}>
        <Link href="/works">Works</Link>
        <Link href="/dev">Dev</Link>
        <Link href="/blog">Blog</Link>
        {/* <Link href={"https://www.buymeacoffee.com/exxhub"} target="_blank">
          Buy Me A Coffee
        </Link> */}
        <ThemeChanger />
      </nav>

      <nav
        className={
          menuOpen ? styles.mobileNav : `${styles.mobileNav} ${styles.hidden}`
        }
      >
        <Link href="/works">Works</Link>
        <Link href="/dev">Dev</Link>
        <Link href="/blog">Blog</Link>
        {/* <Link href={"https://www.buymeacoffee.com/exxhub"} target="_blank">
          Buy Me A Coffee
        </Link> */}
      </nav>

      <section className={styles.themeSwitch}>
        <ThemeChanger />
      </section>
    </header>
  );
}

export default Navigation;
