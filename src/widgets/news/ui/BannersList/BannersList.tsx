import { NewsBanner } from '@/entities/category';
import { INews } from '@/entities/news';
import withSkeleton from '@/shared/hocs/withSkeleton';
import { FC } from 'react';
import styles from './styles.module.css';


interface IProps {
	banners?: INews[] | null;
}

const BannersList: FC<IProps> = ({ banners }) => {
	return (
		<ul className={styles.banners}>
			{banners?.map((banner) => {
				return <NewsBanner key={banner.id} item={banner} />;
			})}
		</ul>
	);
};

const BannersListWithSkeleton = withSkeleton<IProps>(BannersList, 'banner', 10, 'row');

export default BannersListWithSkeleton;
