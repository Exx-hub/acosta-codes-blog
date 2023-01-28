import Image from "next/image";
import { skills } from "../helpers/data";
import styles from "../styles/About.module.css";
import SkillCard from "./SkillCard";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <section id="about" className={styles.aboutContainer}>
      <section className={styles.imageSection}>
        <h3>
          acosta.<span>codes</span>
        </h3>
        <Image
          className={styles.img}
          src={"/images/me4.jpg"}
          width={93}
          height={92}
          alt=""
        />
      </section>
      <h3 className={styles.title}>
        What I <span>Do</span>
      </h3>
      <section className={styles.skillCardsSection}>
        {skills.map((item) => (
          <SkillCard
            key={item.title}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
      <section className={styles.btnSection}>
        <Link href="/works" className={styles.btn}>
          <span>Portfolio</span> <FaChevronRight />
        </Link>
        <Link href="/blog" className={styles.btn}>
          <span>Blog</span> <FaChevronRight />
        </Link>
      </section>
    </section>
  );
}

export default About;
