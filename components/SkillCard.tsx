import styles from "../styles/SkillCard.module.css";
import { IconType } from "react-icons";

interface SkillCardProps {
  Icon: IconType;
  title: string;
  description: string;
}

function SkillCard({ Icon, title, description }: SkillCardProps) {
  return (
    <section className={styles.skillCard}>
      <Icon className={styles.icon} />
      <section className={styles.skillDetails}>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    </section>
  );
}

export default SkillCard;
