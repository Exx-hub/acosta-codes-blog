import Head from "next/head";
import About from "../components/About";
import CustomHeadTags from "../components/CustomHeadTags";
import Landing from "../components/Landing";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Landing />
      <About />
    </div>
  );
}
