import React from "react";
import CustomHeadTags from "../../components/CustomHeadTags";
import PageHeader from "../../components/PageHeader";
import ProjectCard from "../../components/ProjectCard";
import { collaborations, topPicks } from "../../helpers/data";
import styles from "../../styles/Works.module.css";

function Works() {
  return (
    <>
      <CustomHeadTags
        title="Works | acosta codes"
        description="portfolio of websites and webapps"
      />
      <section className={styles.worksContainer}>
        <section className={styles.worksHeader}>
          <PageHeader
            title="My Work"
            subtitle="A collection of my favorite and most recent projects."
          />
        </section>
        <section className={styles.worksGridContainer}>
          <h4>Collaborations</h4>
          <section className={styles.worksGrid}>
            {collaborations.map((collab) => (
              <ProjectCard key={collab.id} proj={collab} />
            ))}
          </section>
          <hr />
          <h4>Personal Top Picks</h4>
          <section className={styles.worksGrid}>
            {topPicks.map((pick) => (
              <ProjectCard key={pick.id} proj={pick} />
            ))}
          </section>
          <hr />
          {/* <h4>React Native</h4>
        <section className={styles.worksGrid}></section> */}
        </section>
      </section>
    </>
  );
}

export default Works;
