import { useAppDispatch } from '@/app/appStore';
import { setFilters } from '@/entities/news/model/newsSlice';
import { TOTAL_PAGE } from '@/shared/constants';
import { IFilters } from '@/shared/interfaces';

const usePaginationNews = (filters:IFilters) => {

   const dispatch = useAppDispatch()

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
  return {
    handleNextPage,
    handlePrevPage,
    handlePageClick
  }
}

export default usePaginationNews