import Skeleton from '../../components/Skeleton/Skeleton.tsx';
import React from 'react';
import { DirectionType, SkeletonType } from '../../interfaces/index.ts';

interface IProps {
	isLoading: boolean;
}

function withSkeleton<P extends object>(
	Component: React.ComponentType<P>,
	type?: SkeletonType,
	count?: number,
	direction?: DirectionType,
) {
	return function withSkeleton(props: IProps & P) {
		const { isLoading, ...restProps } = props;
		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction} />;
		}
		return <Component {...(restProps as P)} />;
	};
}

export default withSkeleton;
