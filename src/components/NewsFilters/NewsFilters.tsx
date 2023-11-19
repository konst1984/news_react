import styles from './styles.module.css';
import useFetch from '../../helpers/hooks/useFetch';
import { getCategories } from '../../api/apiNews.ts';
import Categories from '../Categories/Categories.tsx';
import Search from '../Search/Search.tsx';
import Slider from '../Slider/Slider.tsx';
import { FC } from 'react';
import { ICategoriesApiResponse, IFilters } from '../../interfaces';
import {useTheme} from "../../context/theme/ThemeContext";

interface INewFilters {
	filters: IFilters;
	changeFilters: (key: string, value: string | number | null) => void;
}

const NewsFilters: FC<INewFilters> = ({ filters, changeFilters }) => {
	const { isDark } = useTheme();
	const { data } = useFetch<ICategoriesApiResponse, null>(getCategories);
	return (
		<div className={styles.filters}>
			{data ? (
				<Slider isDark={isDark}>
					<Categories
						categories={data?.categories}
						selectedCategory={filters.category}
						setSelectedCategory={changeFilters}
					/>
				</Slider>
			) : null}
			<Search keywords={filters.keywords} setKeywords={changeFilters} />
		</div>
	);
};

export default NewsFilters;
