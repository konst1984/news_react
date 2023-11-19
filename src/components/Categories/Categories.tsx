import { FC, ForwardedRef } from 'react';
import styles from './styles.module.css';
import { forwardRef } from 'react';
import { CategoryType } from '../../interfaces';

interface IProps {
	categories: CategoryType[];
	setSelectedCategory: (key: string, category: CategoryType | null) => void;
	selectedCategory: CategoryType | null;
}

const Categories: FC<IProps> = forwardRef(
	({ categories, setSelectedCategory, selectedCategory }, ref: ForwardedRef<HTMLDivElement>) => {
		const handleCLick = (category: CategoryType | null) => {
			setSelectedCategory('category', category);
		};

		return (
			<div ref={ref} className={styles.categories}>
				<button
					onClick={() => handleCLick(null)}
					className={!selectedCategory ? styles.active : styles.item}>
					All
				</button>
				{categories?.map((category) => {
					return (
						<button
							onClick={() => handleCLick(category)}
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
