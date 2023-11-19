export interface INews {
	author: string;
	category: CategoryType[];
	description: string;
	id: string;
	image: string;
	language: string;
	published: string;
	title: string;
	url: string;
}

export interface INewsApiResponse {
	news: INews[];
	page: number;
	status: string;
}

export interface ICategoriesApiResponse {
	categories: CategoryType[];
	description: string;
	status: string;
}

export interface IFilters {
	page_number: number;
	page_size: number;
	category: CategoryType | null;
	keywords: string;
}

export interface IPaginationProps {
	totalPages: number;
	currentPage: number;
	handlePageClick: (page: number) => void;
	handleNextPage: () => void;
	handlePrevPage: () => void;
}

export type ParamsType = Partial<IFilters>;

export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';

export type CategoryType =
	| 'all'
	| 'regional'
	| 'technology'
	| 'lifestyle'
	| 'business'
	| 'general'
	| 'programming'
	| 'science'
	| 'entertainment'
	| 'world'
	| 'sports'
	| 'finance'
	| 'academia'
	| 'politics'
	| 'health'
	| 'opinion'
	| 'food'
	| 'game'
	| 'fashion'
	| 'academic'
	| 'crap'
	| 'travel'
	| 'culture'
	| 'economy'
	| 'environment'
	| 'art'
	| 'music'
	| 'notsure'
	| 'CS'
	| 'education'
	| 'redundant'
	| 'television'
	| 'commodity'
	| 'movie'
	| 'entrepreneur'
	| 'review'
	| 'auto'
	| 'energy'
	| 'celebrity'
	| 'medical'
	| 'gadgets'
	| 'design'
	| 'EE'
	| 'security'
	| 'mobile'
	| 'estate'
	| 'funny';
