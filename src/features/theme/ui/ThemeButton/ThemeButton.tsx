import { themeIcons } from "@/shared/assets";
import styles from './styles.module.css'
import { useTheme } from '@/app/providers/ThemeProvider';

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
      <button className={styles.theme_btn}>
        <img
          src={isDark ? themeIcons.light : themeIcons.dark}
          width={30}
          alt="theme"
          onClick={toggleTheme}
        />
      </button>
  )
}

export default ThemeButton