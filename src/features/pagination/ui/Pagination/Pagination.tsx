import React, { FC } from 'react';
import PaginationButtons from '../PaginationButtons/PaginationButtons';
import { IPaginationProps } from '../../model/types';

interface IProps {
	children: React.ReactNode;
	top?: boolean;
	bottom?: boolean;
}

const Pagination: FC<IProps & IPaginationProps> = ({
	bottom,
	children,
	...paginationProps
}) => {
	return (
		<>
			{children}
			{bottom && <PaginationButtons {...paginationProps} />}
		</>
	);
};

export default Pagination;
