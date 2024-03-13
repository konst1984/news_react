export interface IPaginationProps {
	totalPages: number;
	currentPage: number;
	handlePageClick: (page: number) => void;
	handleNextPage: () => void;
	handlePrevPage: () => void;
}

