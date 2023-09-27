import NewsBanner from "../components/NewsBanner/NewsBanner.jsx";
import { getCategories, getNews } from "../api/apiNews.js";
import NewsList from "../components/NewsList/NewsList.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import Categories from "../components/Categories/Categories.jsx";
import Search from "../components/Search/Search.jsx";
import { useDebounce } from "../helpers/hooks/useDebounce.js";
import styles from "./styles.module.css";
import { PAGE_SIZE, TOTAL_PAGE } from "../constants/constants.js";
import useFetch from "../helpers/hooks/useFetch.js";
import useFilters from "../helpers/hooks/useFilters.js";

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
  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      changeFilters("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilters("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    if (filters.page_number <= TOTAL_PAGE) {
      changeFilters("page_number", pageNumber);
    }
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={dataCategories?.categories}
        selectedCategory={filters.category}
        setSelectedCategory={changeFilters}
      />
      <Search keywords={filters.keywords} setKeywords={changeFilters} />
      <NewsBanner
        item={dataNews?.news?.length > 0 && dataNews?.news[0]}
        isLoading={isLoading}
      />
      {dataNews?.news?.length > PAGE_SIZE && (
        <Pagination
          totalPages={TOTAL_PAGE}
          currentPage={filters.page_number}
          handlePageClick={handlePageClick}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      )}
      <NewsList news={dataNews?.news} isLoading={isLoading} />
      {dataNews?.news?.length > PAGE_SIZE && (
        <Pagination
          totalPages={TOTAL_PAGE}
          currentPage={filters.page_number}
          handlePageClick={handlePageClick}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      )}
    </main>
  );
};

export default Main;
