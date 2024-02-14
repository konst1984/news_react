import styles from './styles.module.css';
import Categories from '../Categories/Categories.tsx';
import Search from '../Search/Search.tsx';
import Slider from '../Slider/Slider.tsx';
import { FC } from 'react';
import { IFilters } from '../../interfaces';
import {useTheme} from "../../context/ThemeContext";
import { useGetCategoriesQuery } from '../../store/services/newsApi.ts';
import { setFilters } from '../../store/slices/newsSlice.ts';
import { useAppDispatch } from '../../store/index.ts';

interface INewFilters {
	filters: IFilters;
}

const NewsFilters: FC<INewFilters> = ({ filters }) => {
	const { isDark } = useTheme();
	const dispatch = useAppDispatch();
	const { data } = useGetCategoriesQuery(null);

	return (
		<div className={styles.filters}>
			{data ? (
				<Slider isDark={isDark}>
					<Categories
						categories={data?.categories}
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
