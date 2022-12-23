import React from "react";
import BlogList from "../../components/BlogList";
import CustomHeadTags from "../../components/CustomHeadTags";
import { getAllBlogs } from "../../helpers/post-utils";
import { Blog } from "../../types/interfaces";

function BlogsPage({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      <CustomHeadTags
        title="Blog | acosta codes"
        description="Collection of blog posts about tech and development"
      />
      <BlogList blogs={blogs} />
    </>
  );
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
