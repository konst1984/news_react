import styles from "./styles.module.css";
import { PAGE_SIZE, TOTAL_PAGE } from "../../constants/constants.js";
import NewsList from "../NewsList/NewsList.jsx";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";
import useFetch from "../../helpers/hooks/useFetch.js";
import { getNews } from "../../api/apiNews.js";
import useFilters from "../../helpers/hooks/useFilters.js";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.jsx";

const NewsByFilters = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "all",
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

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
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />

      <PaginationWrapper
        top={true}
        bottom={true}
        totalPages={TOTAL_PAGE}
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      >
        <NewsList news={data?.news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
