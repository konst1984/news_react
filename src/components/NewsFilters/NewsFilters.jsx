import styles from "./styles.module.css";
import useFetch from "../../helpers/hooks/useFetch.js";
import { getCategories } from "../../api/apiNews.js";
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data } = useFetch(getCategories);
  return (
    <div className={styles.filters}>
      <Categories
        categories={data?.categories}
        selectedCategory={filters.category}
        setSelectedCategory={(category) => changeFilter("category", category)}
      />
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
