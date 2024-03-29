import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import styles from "../styles/Navigation.module.css";
import ThemeChanger from "./ThemeChanger";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useRouter();
  return (
    <header className={styles.header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href={"/"}>
          <p>
            acosta.<span>codes</span>
          </p>
        </Link>
        <FaCaretDown className={styles.menuToggle} onClick={() => setMenuOpen((prev) => !prev)} />
      </div>

      <nav className={styles.nav}>
        <Link href="/works" className={pathname === "/works" ? `${styles.active}` : ""}>
          Works
        </Link>
        <Link href="/dev" className={pathname === "/dev" ? `${styles.active}` : ""}>
          Dev
        </Link>
        <Link href="/blog" className={pathname === "/blog" ? `${styles.active}` : ""}>
          Blog
        </Link>
        <ThemeChanger />
      </nav>

      <nav
        className={menuOpen ? styles.mobileNav : `${styles.mobileNav} ${styles.hidden}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Link href="/works">Works</Link>
        <Link href="/dev">Dev</Link>
        <Link href="/blog">Blog</Link>
      </nav>

      <section className={styles.themeSwitch}>
        <ThemeChanger />
      </section>
    </header>
  );
}

export default Navigation;
