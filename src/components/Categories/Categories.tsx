import { FC, ForwardedRef } from 'react';
import styles from './styles.module.css';
import { forwardRef } from 'react';
import { CategoryType } from '../../interfaces';

interface IProps {
	categories: CategoryType[];
	setSelectedCategory: (category: CategoryType | null) => void;
	selectedCategory: CategoryType | null;
}

const Categories: FC<IProps> = forwardRef(
	({ categories, setSelectedCategory, selectedCategory }, ref: ForwardedRef<HTMLDivElement>) => {

		return (
			<div ref={ref} className={styles.categories}>
				<button
					onClick={() => setSelectedCategory(null)}
					className={!selectedCategory ? styles.active : styles.item}>
					All
				</button>
				{categories?.map((category) => {
					return (
						<button
							onClick={() => setSelectedCategory(category)}
							className={selectedCategory === category ? styles.active : styles.item}
							key={category}>
							{category}
						</button>
					);
				})}
			</div>
		);
	},
);

Categories.displayName = 'Categories';

export default Categories;
