import React from "react";
import PageHeader from "../../components/PageHeader";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/Works.module.css";

function Works() {
  return (
    <section className={styles.worksContainer}>
      <section className={styles.worksHeader}>
        <PageHeader
          title="My Work"
          subtitle="A collection of my favorite and most recent projects."
        />
      </section>
      <section>
        <h4>Freelance Work / Collaborations</h4>
        <ProjectCard />
      </section>
      <section>
        <h4>Personal Projects</h4>
      </section>
      <section>
        <h4>React Native</h4>
      </section>
    </section>
  );
}

export default Works;
