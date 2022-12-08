import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { FaRegLightbulb } from "react-icons/fa";
import styles from "../styles/ThemeChanger.module.css";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div onClick={handleTheme}>
      <FaRegLightbulb className={styles.themeIcon} />
    </div>
  );
};

export default ThemeChanger;
