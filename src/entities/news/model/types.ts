import { CategoryType } from "@/entities/category";

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