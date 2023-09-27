import styles from "./styles.module.css";

const Search = ({ keywords, setKeywords }) => {
  const handleChange = (keywords) => setKeywords("keywords", keywords);

  return (
    <form>
      <label>
        <input
          type="text"
          value={keywords}
          onChange={(e) => handleChange(e.target.value)}
          className={styles.input}
          placeholder="Search..."
        />
      </label>
    </form>
  );
};

export default Search;
