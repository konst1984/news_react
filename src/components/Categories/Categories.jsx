import styles from "./styles.module.css";

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  const handleCLick = (category) => setSelectedCategory("category", category);

  if (!categories) {
    return null;
  }

  return (
    <div className={styles.categories}>
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
};

// Categories.displayName = "Categories";

export default Categories;
