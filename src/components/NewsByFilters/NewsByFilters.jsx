import styles from "./styles.module.css";
import Pagination from "../Pagination/Pagination.jsx";
import { TOTAL_PAGE } from "../../constants/constants.js";
import NewsList from "../NewsList/NewsList.jsx";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";

const NewsByFilters = ({ news, isLoading, filters, changeFilters }) => {
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
      <Pagination
        totalPages={TOTAL_PAGE}
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
      <NewsList news={news} isLoading={isLoading} />
      <Pagination
        totalPages={TOTAL_PAGE}
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </section>
  );
};

export default NewsByFilters;
