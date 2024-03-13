import { useAppDispatch, useAppSelector } from "@/app/appStore";
import NewsFilters from "@/pages/main/ui/NewsFilters/NewsFilters";
import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import { TOTAL_PAGE } from "@/shared/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import { Pagination } from "@/features/pagination";

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

      <Pagination
        bottom={true}
        totalPages={TOTAL_PAGE}
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      >
        <NewsList news={data?.news} isLoading={isLoading} />
      </Pagination>
    </section>
  );
};

export default NewsByFilters;
