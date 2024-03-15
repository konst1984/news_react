import Skeleton from '../ui/Skeleton/Skeleton.tsx';
import React from 'react';
import { DirectionType, SkeletonType } from '../interfaces/index.ts';

interface IProps {
	isLoading: boolean;
	type?: SkeletonType,
	direction?: DirectionType,
}

function withSkeleton<P extends object>(
	Component: React.ComponentType<P>,
	count?: number,
) {
	return function withSkeleton(props: IProps & P) {
		const { isLoading,type, direction = 'column', ...restProps } = props;
		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction} />;
		}
		return <Component type={type} {...(restProps as P)} />;
	};
}

export default withSkeleton;
