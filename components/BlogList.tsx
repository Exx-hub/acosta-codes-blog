import styles from "../styles/BlogList.module.css";
import { Blog } from "../types/interfaces";
import BlogItem from "./BlogItem";
import PageHeader from "./PageHeader";

function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <section className={styles.blogListContainer}>
      <section className={styles.blogListHeader}>
        <PageHeader
          title="Personal Blog"
          subtitle="Sharing info with words and code."
        />
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
    </section>
  );
}

export default BlogList;
