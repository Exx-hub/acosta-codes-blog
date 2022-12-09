import styles from "../styles/BlogList.module.css";
import { Blog } from "../types/interfaces";
import BlogItem from "./BlogItem";
import ThemeChanger from "./ThemeChanger";

function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <section id="blog" className={styles.blogListContainer}>
      <section className={styles.blogListHeader}>
        <h3>Personal Blog</h3>
        <p>Sharing info with words and code.</p>
        <ThemeChanger />
      </section>
      <section>
        {blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            caption={blog.caption}
            image={blog.image}
            date={blog.date}
            slug={blog.slug}
          />
        ))}
      </section>
      {/* <a href="#">Back to top</a> */}
    </section>
  );
}

export default BlogList;
