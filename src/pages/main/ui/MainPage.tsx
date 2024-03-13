import NewsByFilters from "@/pages/main/ui/NewsByFilters/NewsByFilters";
import styles from "./styles.module.css";
import LatestNews from "@/pages/main/ui/LatestNews/LatestNews";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default MainPage;
