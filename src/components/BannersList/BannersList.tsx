import { FC } from 'react';
import withSkeleton from '../../helpers/hocs/withSkeleton';
import NewsBanner from '../NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { INews } from '../../interfaces';

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
