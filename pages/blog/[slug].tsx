import { GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/layout/Layout";
import { dateConvert } from "../../helpers/dateConvert";
import { createBlog, getFiles } from "../../helpers/post-utils";
import { Blog, FixMeLater } from "../../types/interfaces";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PrismLight } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import materialOcean from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";

import styles from "../../styles/BlogPage.module.css";
import CustomHeadTags from "../../components/CustomHeadTags";

PrismLight.registerLanguage("js", js);
PrismLight.registerLanguage("ts", ts);
PrismLight.registerLanguage("jsx", jsx);

function BlogPage({ blog }: { blog: Blog }) {
  const convertedDate = dateConvert(blog.date);

  const customRenders = {
    img(image: FixMeLater) {
      return (
        <Image
          src={`/blogImages/${blog.slug}/${image.src}`}
          width={600}
          height={400}
          alt={`${image.alt}`}
        />
      );
    },

    code(code: FixMeLater) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <PrismLight language={language} style={materialOcean}>
          {children}
        </PrismLight>
      );
    },
  };
  return (
    <>
      <CustomHeadTags title={blog.title} description={blog.title} />
      <article className={styles.blogPageContainer}>
        <section className={styles.blogPageHeader}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.caption}>{blog.caption}</p>
          <p className={styles.date}>{convertedDate}</p>
          <hr />
        </section>
        <section className={styles.blogPageContent}>
          <ReactMarkdown components={customRenders}>
            {blog.content}
          </ReactMarkdown>
        </section>
      </article>
    </>
  );
}

export default BlogPage;

export const getStaticPaths = () => {
  const files = getFiles();

  const paths = files.map((file) => {
    const slug = file.replace(/\.md$/, "");

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug = context.params?.slug;
  const blog = createBlog(slug);
  return {
    props: {
      blog,
    },
  };
};
