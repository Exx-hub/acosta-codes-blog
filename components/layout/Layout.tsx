import Navigation from "../Navigation";
import styles from "../../styles/Layout.module.css";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
