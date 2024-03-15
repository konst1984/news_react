import styles from './styles.module.css';
import Image from '@/shared/ui/Image/Image';
import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import { formatStr } from '@/shared/helpers/formatTitle';
import { FC } from 'react';
import { INews } from '../..';

interface IProps {
	item: INews;
	type: "banner" | "item";
}

const NewsCard: FC<IProps> = ({ item, type = "item" }) => {
	return (
		<li className={`${styles.card} ${type === "banner" && styles.banner}`}>
				{type === "banner" ? 
						<Image image={item.image} classname={'wrapper_full'} />
				:  
					<div
							className={styles.wrapper}
							style={{ backgroundImage: `url(${item.image})` }}
						/>
				}
			<div className={styles.info}>
				<h3 className={`${type === "banner" ? styles["title-banner"] : styles["title-item"]}`}>{formatStr(item.title)}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	);
};

export default NewsCard;
