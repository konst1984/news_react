import BannersList from '../BannersList/BannersList.js';
import styles from './styles.module.css';
import useFetch from '../../helpers/hooks/useFetch';
import { getLatestNews } from '../../api/apiNews.ts';
import { INewsApiResponse } from '../../interfaces';

const LatestNews = () => {
	const { data, isLoading } = useFetch<INewsApiResponse, null>(getLatestNews);

	return (
		<section className={styles.section}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</section>
	);
};

export default LatestNews;
