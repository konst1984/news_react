import styles from "./styles.module.css";
import useFetch from "../../helpers/hooks/useFetch.js";
import { getCategories } from "../../api/apiNews.js";
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import Slider from "../Slider/Slider.jsx";

const NewsFilters = ({ filters, changeFilters }) => {
  const { data } = useFetch(getCategories);
  return (
    <div className={styles.filters}>
      {data ? (
        <Slider>
          <Categories
            categories={data?.categories}
            selectedCategory={filters.category}
            setSelectedCategory={changeFilters}
          />
        </Slider>
      ) : null}
      <Search keywords={filters.keywords} setKeywords={changeFilters} />
    </div>
  );
};

export default NewsFilters;
