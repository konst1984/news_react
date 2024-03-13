import { NewsItem } from '@/entities/category';
import { INews } from '@/entities/news';
import withSkeleton from '@/shared/hocs/withSkeleton';
import { FC } from 'react';
import styles from './styles.module.css';


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
