import styles from './styles.module.css';
import NewsItem from '../NewsItem/NewsItem';
import withSkeleton from '../../helpers/hocs/withSkeleton';
import { INews } from '../../interfaces';
import { FC } from 'react';

interface IProps {
	news?: INews[];
}

const NewsList: FC<IProps> = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news?.map((item) => {
				return <NewsItem key={item.id} item={item} />;
			})}
		</ul>
	);
};

const NewListWithSkeleton = withSkeleton<IProps>(NewsList, 'item', 10);

export default NewListWithSkeleton;
