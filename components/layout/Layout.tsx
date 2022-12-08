import React from "react";
import Navigation from "../Navigation";
import styles from "../../styles/Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <article>
      <Navigation />
      <main className={styles.main}>{children}</main>
    </article>
  );
}

export default Layout;
