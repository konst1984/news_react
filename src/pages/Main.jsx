import { getNews } from "../api/apiNews.js";
import { useDebounce } from "../helpers/hooks/useDebounce.js";
import styles from "./styles.module.css";
import { PAGE_SIZE } from "../constants/constants.js";
import useFetch from "../helpers/hooks/useFetch.js";
import useFilters from "../helpers/hooks/useFilters.js";
import LatestNews from "../components/LatestNews/LatestNews.jsx";
import NewsByFilters from "../components/NewsByFilters/NewsByFilters.jsx";

const Main = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "all",
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 500);

  const { data: dataNews, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <main className={styles.main}>
      <LatestNews data={dataNews} isLoading={isLoading} />
      <NewsByFilters
        news={dataNews?.news}
        isLoading={isLoading}
        filters={filters}
        changeFilters={changeFilters}
      />
    </main>
  );
};

export default Main;
