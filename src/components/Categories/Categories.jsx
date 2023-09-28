import styles from "./styles.module.css";
import { forwardRef } from "react";

const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
    const handleCLick = (category) => {
      setSelectedCategory("category", category);
    };

    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => handleCLick(null)}
          className={!selectedCategory ? styles.active : styles.item}
        >
          All
        </button>
        {categories?.map((category) => {
          return (
            <button
              onClick={() => handleCLick(category)}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
