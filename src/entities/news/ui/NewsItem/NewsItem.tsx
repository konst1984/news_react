import styles from './styles.module.css';
import Image from '@/shared/ui/Image/Image';
import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import { formatStr } from '@/shared/helpers/formatTitle';
import { FC } from 'react';
import { INews } from '../..';

interface IProps {
	item: INews;
}

const NewsItem: FC<IProps> = ({ item }) => {
	return (
		<li className={styles.item}>
			<div className={styles.wrapper}>
				<Image image={item.image} classname={'wrapper_full'} />
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>{formatStr(item.title)}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	);
};

export default NewsItem;
