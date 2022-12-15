import styles from "../styles/PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <>
      <h3 className={styles.pageTitle}>{title}</h3>
      <p className={styles.pageSubtitle}>{subtitle}</p>
    </>
  );
}

export default PageHeader;
