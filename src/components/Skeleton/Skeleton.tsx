import { FC } from 'react';
import { DirectionType, SkeletonType } from '../../interfaces';
import styles from './styles.module.css';

interface IProps {
	type?: SkeletonType;
	count?: number;
	direction?: DirectionType;
}

const Skeleton: FC<IProps> = ({ count = 1, type = 'banner', direction = 'column' }) => {
	if (count <= 1) {
		return (
			<>
				<li className={type === 'banner' ? styles.banner : styles.item}></li>
			</>
		);
	}

	return (
		<>
			<ul className={direction === 'column' ? styles.columnList : styles.rowList}>
				{[...Array(count)].map((_, index) => (
					<li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>
				))}
			</ul>
		</>
	);
};

export default Skeleton;
