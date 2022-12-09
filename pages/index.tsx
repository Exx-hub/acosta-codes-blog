import Head from "next/head";
import Layout from "../components/layout/Layout";
import Landing from "../components/Landing";
import styles from "../styles/Home.module.css";
import BlogList from "../components/BlogList";
import { getAllBlogs, getFiles } from "../helpers/post-utils";
import { Blog } from "../types/interfaces";

interface HomeProps {
  blogs: Blog[];
}

export default function Home({ blogs }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>acosta codes blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <BlogList blogs={blogs} />
      </Layout>
    </div>
  );
}

export const getStaticProps = () => {
  const blogs = getAllBlogs();
  // console.log(blogs);

  return {
    props: {
      blogs,
    },
  };
};
