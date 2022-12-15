import React from "react";
import BlogList from "../../components/BlogList";
import { getAllBlogs } from "../../helpers/post-utils";
import { Blog } from "../../types/interfaces";

function BlogsPage({ blogs }: { blogs: Blog[] }) {
  return <BlogList blogs={blogs} />;
}

export default BlogsPage;

export const getStaticProps = () => {
  const blogs = getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};
