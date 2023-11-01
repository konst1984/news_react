import styles from "./styles.module.css";
import { PAGE_SIZE, TOTAL_PAGE } from "../../constants";
import NewsList from "../NewsList/NewsList.tsx";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import useFetch from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/apiNews.ts";
import useFilters from "../../helpers/hooks/useFilters";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";
import {INewsApiResponse, ParamsType} from "../../interfaces";

const NewsByFilters = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "all",
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 500);

  const { data, isLoading } = useFetch<INewsApiResponse,ParamsType>(getNews, {
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

  const handlePageClick = (pageNumber: number) => {
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
