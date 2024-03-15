import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import { TOTAL_PAGE } from "@/shared/constants";
import { Pagination } from "@/features/pagination";
import { IFilters } from "@/shared/interfaces";
import { FC } from "react";
import { INews } from "@/entities/news";
import usePaginationNews from "../../utils/hooks/usePaginationNews";

interface INewsListWithPagination {
  filters: IFilters;
  news:INews[];
  isLoading:boolean
}
const NewsListWithPagination:FC<INewsListWithPagination> = ({isLoading,filters, news}) => {
  const {handleNextPage, handlePrevPage, handlePageClick} = usePaginationNews(filters);

  return (
      <Pagination
        bottom={true}
        totalPages={TOTAL_PAGE}
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      >
        <NewsList news={news} isLoading={isLoading} type="item" direction="column"/>
      </Pagination>
  );
};

export default NewsListWithPagination;
