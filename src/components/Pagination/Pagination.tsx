import { FC } from 'react';
import styles from './styles.module.css';
import { IPaginationProps } from '../../interfaces';
import {useTheme} from "../../context/theme/ThemeContext";

const Pagination: FC<IPaginationProps> = ({
	totalPages,
	currentPage,
	handlePageClick,
	handleNextPage,
	handlePrevPage,
}) => {
	const { isDark } = useTheme();
	return (
		<div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
			<button className={styles.arrow} onClick={handlePrevPage} disabled={currentPage <= 1}>
				{'<'}
			</button>
			<ul className={styles.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							key={index}
							className={styles.pageNumber}
							disabled={index + 1 === currentPage}
							onClick={() => handlePageClick(index + 1)}>
							{index + 1}
						</button>
					);
				})}
			</ul>
			<button
				className={styles.arrow}
				onClick={handleNextPage}
				disabled={currentPage >= totalPages}>
				{'>'}
			</button>
		</div>
	);
};

export default Pagination;
