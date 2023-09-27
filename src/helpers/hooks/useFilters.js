import { useState } from "react";

const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilters = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return { filters, changeFilters };
};

export default useFilters;
