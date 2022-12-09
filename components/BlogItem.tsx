import Image from "next/image";
import Link from "next/link";
import { dateConvert } from "../helpers/dateConvert";
import styles from "../styles/BlogItem.module.css";

interface BlogItemProps {
  title: string;
  date: string;
  caption: string;
  image: string;
  slug: string;
}

function BlogItem(props: BlogItemProps) {
  const imgSrc = `/blogImages/${props.slug}/${props.image}`;
  const convertedDate = dateConvert(props.date);
  return (
    <Link href={`/blog/${props.slug}`} className={styles.blogItemContainer}>
      <section className={styles.blogImage}>
        <Image src={imgSrc} width={800} height={600} alt="" />
      </section>
      <section className={styles.blogDetails}>
        <section>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.date}>{convertedDate}</p>
        </section>
        <p className={styles.caption}>{props.caption}</p>
        <p className={styles.more}>+ more</p>
      </section>
    </Link>
  );
}

export default BlogItem;
