import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { formatStr } from "@/shared/helpers/formatTitle";
import { getAuthors } from "@/shared/helpers/getAuthors";
import { FC } from "react";
import { INews } from "../..";
import Image from '@/shared/ui/Image/Image.js';
import styles from './styles.module.css';

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
