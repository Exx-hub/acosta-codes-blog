import Image from "next/image";
import { FaEye, FaCode } from "react-icons/fa";
import styles from "../styles/ProjectCard.module.css";

function ProjectCard() {
  return (
    <div>
      <Image src={"/projectImages/meme.png"} alt="" height="180" width="300" />
      <h4>title</h4>
      <div className={styles.projectButtons}>
        <a href={""} target="_blank">
          <FaCode />
          <span className={styles.projectButtonsSpan}>Live</span>
        </a>
        <a href={"srcCode"} target="_blank">
          <FaEye />
          <span className={styles.projectButtonsSpan}>Src Code</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
