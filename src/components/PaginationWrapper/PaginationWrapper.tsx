import React, { FC } from 'react';
import Pagination from '../Pagination/Pagination';
import { IPaginationProps } from '../../interfaces';

interface IProps {
	children: React.ReactNode;
	top?: boolean;
	bottom?: boolean;
}

const PaginationWrapper: FC<IProps & IPaginationProps> = ({
	bottom,
	children,
	...paginationProps
}) => {
	return (
		<>
			{children}
			{bottom && <Pagination {...paginationProps} />}
		</>
	);
};

export default PaginationWrapper;
