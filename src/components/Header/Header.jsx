import styles from "./styles.module.css";
import { formatDate } from "../../helpers/formatDate.js";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>FRESH NEWS</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
