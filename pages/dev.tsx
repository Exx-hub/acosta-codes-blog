import Image from "next/image";
import Link from "next/link";
import { FaFileDownload, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import CustomHeadTags from "../components/CustomHeadTags";
import PageHeader from "../components/PageHeader";
import { languages, tools } from "../helpers/data";
import styles from "../styles/DevBackground.module.css";

function DevBackground() {
  return (
    <>
      <CustomHeadTags
        title="Dev Background | acosta codes"
        description="Education, experience and developer background of author"
      />
      <section className={styles.devContainer}>
        <section className={styles.devHeader}>
          <PageHeader title="Dev Background" subtitle="My journey into coding and tech I use." />
        </section>
        <section className={styles.devContentGrid}>
          <section className={styles.gridSection}>
            <h4>Education</h4>
            <div className={styles.educationDiv}>
              <h5>Far Eastern University - NRMF (2007-2011)</h5>
              <p>• B.S. Nursing - Registered Nurse</p>
            </div>
            <div className={styles.educationDiv}>
              <h5>AMA-CU (2013-2017)</h5>
              <p>• B.S. Information Technology - Under graduate</p>
            </div>
            <div className={styles.educationDiv}>
              <h5>Zuitt Coding BootCamp Ph (2021)</h5>
              <p>• Full Stack Web Development</p>
            </div>
          </section>
          <section className={styles.gridSection}>
            <h4>Experience / Affiliations</h4>
            <section className={styles.experienceSection}>
              <div className={styles.ctaDiv}>
                <Link href="https://www.linkedin.com/in/alvin-acosta/" target="_blank">
                  <FaLinkedinIn className={styles.cta} />
                  LinkedIn
                </Link>
                <Link href="/resume-alvin-acosta-feb2024.pdf" target="_blank" download>
                  <FaFileDownload className={styles.cta} />
                  Resume
                </Link>
                <Link href="mailto:alvinfloresacosta@gmail.com">
                  <FaPaperPlane className={styles.cta} />
                  Contact Me
                </Link>
              </div>
              <div>
                <h6>• IOT MovOn PH</h6>
                <h6>• Cauld & Clark IT Solutions</h6>
                <h6>• Zuitt Coding Bootcamp</h6>
                <h6>• Tech Career Shifter PH</h6>
                <h6>• FreeCodeCamp Manila</h6>
                <h6>• ReactJs Philippines</h6>
              </div>
            </section>
          </section>
          <section className={styles.gridSection}>
            <h4>Tech I Use</h4>
            <div className={styles.techGrid}>
              {languages.map((e) => (
                <div className={styles.techItem} key={e.title}>
                  <Image src={e.image} height={30} width={30} alt={e.title} />
                  <p>{e.title}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.gridSection}>
            <h4>Development Tools</h4>
            <div className={styles.techGrid}>
              {tools.map((e) => (
                <div className={styles.techItem} key={e.title}>
                  <Image src={e.image} height={30} width={30} alt={e.title} />
                  <p>{e.title}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default DevBackground;
