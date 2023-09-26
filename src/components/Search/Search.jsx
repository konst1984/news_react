import styles from "./styles.module.css";

const Search = ({ keywords, setKeywords }) => {
  return (
    <form>
      <label>
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className={styles.input}
          placeholder="Search..."
        />
      </label>
    </form>
  );
};

export default Search;
