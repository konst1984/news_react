import styles from './styles.module.css';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image/Image.tsx';
import { formatStr } from '../../helpers/formatTitle';
import { INews } from '../../interfaces';
import { FC } from 'react';

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
