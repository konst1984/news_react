import React, { FC } from 'react';
import Pagination from '../Pagination/Pagination';
import { IPaginationProps } from '../../interfaces';

interface IProps {
	children: React.ReactNode;
	top?: boolean;
	bottom?: boolean;
}

const PaginationWrapper: FC<IProps & IPaginationProps> = ({
	top,
	bottom,
	children,
	...paginationProps
}) => {
	return (
		<>
			{top && <Pagination {...paginationProps} />}
			{children}
			{bottom && <Pagination {...paginationProps} />}
		</>
	);
};

export default PaginationWrapper;
