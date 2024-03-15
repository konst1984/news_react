import { FC } from 'react';
import { useAppDispatch } from '@/app/appStore';
import { useTheme } from '@/app/providers/ThemeProvider';
import Categories from '@/features/category/ui/Categories/Categories';
import Search from '@/features/search/ui/Search/Search';
import Slider from '@/features/slider/ui/Slider/Slider';
import { IFilters } from '@/shared/interfaces';
import { setFilters } from '@/entities/news/model/newsSlice';
import styles from './styles.module.css';
import { CategoryType } from '@/entities/category';

interface INewFilters {
	filters: IFilters;
	categories: CategoryType[]
}

const NewsFilters: FC<INewFilters> = ({ filters,categories }) => {
	const { isDark } = useTheme();
	const dispatch = useAppDispatch();

	return (
		<div className={styles.filters}>
			{categories ? (
				<Slider isDark={isDark}>
					<Categories
						categories={categories}
						selectedCategory={filters.category}
						setSelectedCategory={(category) => {
							dispatch(setFilters({key: "category", value: category}));
						}}
					/>
				</Slider>
			) : null}
			<Search keywords={filters.keywords} setKeywords={(keywords) => {
							dispatch(setFilters({key: "keywords", value: keywords}));
						}} />
		</div>
	);
};

export default NewsFilters;
