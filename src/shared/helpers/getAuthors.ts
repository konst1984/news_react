import { INews } from '../interfaces';
import { formatAuthors } from './formatAuthors';

export const getAuthors = (item: INews): string[] => {
	const indexTarget = item.author.search('href');
	if (indexTarget > -1) {
		return formatAuthors(item.author);
	}
	return item.author.split(',');
};
