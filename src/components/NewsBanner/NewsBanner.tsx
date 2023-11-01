import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image/Image.js';
import styles from './styles.module.css';
import { formatStr } from '../../helpers/formatTitle';
import { INews } from '../../interfaces';
import { FC } from 'react';
import { getAuthors } from '../../helpers/getAuthors';

interface IProps {
	item: INews;
}

const NewsBanner: FC<IProps> = ({ item }) => {
	const authors: string[] = getAuthors(item);

	return (
		<div className={styles.banner}>
			<Image image={item?.image} />
			<h3 className={styles.title}>{formatStr(item.title)}</h3>
			<div className={styles.extra}>
				{formatTimeAgo(item.published)} by{' '}
				{!authors ? (
					item.author
				) : (
					<ul className={styles.authorsList}>
						{authors?.map((elem, i) => (
							<li key={i}>{elem}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default NewsBanner;
