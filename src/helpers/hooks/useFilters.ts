import { useState } from 'react';
import { IFilters } from '../../interfaces';

const useFilters = (initialFilters: IFilters) => {
	const [filters, setFilters] = useState<IFilters>(initialFilters);

	const changeFilters = (key: string, value: string | number | null): void => {
		setFilters((prev) => ({ ...prev, [key]: value }));
	};

	return { filters, changeFilters };
};

export default useFilters;
