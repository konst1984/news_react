import styles from "./styles.module.css";
import { TOTAL_PAGE } from "../../constants";
import NewsList from "../NewsList/NewsList.tsx";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";
import { useGetNewsQuery } from "../../store/services/newsApi.ts";
import { useAppDispatch, useAppSelector } from "../../store/index.ts";
import { setFilters } from "../../store/slices/newsSlice.ts";

const NewsByFilters = () => {
  const dispatch = useAppDispatch()

  const filters = useAppSelector(state => state.news.filters);

  const debouncedKeywords = useDebounce(filters.keywords, 500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  })

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
     dispatch(setFilters({key:"page_number", value: filters.page_number + 1}));
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      dispatch(setFilters({key: "page_number", value: filters.page_number - 1}));
    }
  };

  const handlePageClick = (pageNumber: number) => {
    if (filters.page_number <= TOTAL_PAGE) {
      dispatch(setFilters({key: "page_number", value: pageNumber}));
    }
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
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
