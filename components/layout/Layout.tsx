import Navigation from "../Navigation";
import styles from "../../styles/Layout.module.css";
import Footer from "../Footer";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>acosta codes</title>
        <meta name="title" property="og:title" content="Personal Website" />
        <meta
          name="description"
          property="og:description"
          content="Personal Website"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Alvin Flores Acosta" />
        <meta name="url" property="og:url" content="https://acosta.codes" />
        <meta
          name="image"
          property="og:image"
          content="https://i.ibb.co/D58CWzK/acostacodes.png"
        />
        <link rel="icon" href="/alv.ico" />
      </Head>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
