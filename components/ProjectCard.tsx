import Image from "next/image";
import Link from "next/link";
import { FaEye, FaCode } from "react-icons/fa";
import styles from "../styles/ProjectCard.module.css";
import { Project } from "../types/interfaces";

interface ProjectCardProps {
  proj: Project;
  isMobile?: boolean;
}

function ProjectCard({ proj, isMobile }: ProjectCardProps) {
  const { image, title, live, srcCode } = proj;
  return (
    <section className={styles.projectCard}>
      <Image src={image} alt={title} height="180" width={isMobile ? "205" : "300"} />
      <h4>{title}</h4>
      <section className={styles.projectButtons}>
        {!isMobile && (
          <Link href={live} target="_blank">
            <FaCode className={styles.projectIcon} />
            <span className={styles.projectButtonsSpan}>Live</span>
          </Link>
        )}
        <Link href={srcCode} target="_blank">
          <FaEye className={styles.projectIcon} />
          <span className={styles.projectButtonsSpan}>Src Code</span>
        </Link>
      </section>
    </section>
  );
}

export default ProjectCard;
