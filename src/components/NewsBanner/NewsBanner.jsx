import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
import styles from "./styles.module.css";
import { formatStr } from "../../helpers/formatTitle.js";
import { formatAuthors } from "../../helpers/formatAuthors.js";

const NewsBanner = ({ item }) => {
  const authors = () => {
    const indexTarget = item.author.search("href");
    if (indexTarget > -1) {
      return formatAuthors(item.author);
    }
  };

  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{formatStr(item?.title)}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by{" "}
        {authors.length <= 0 ? (
          item.author
        ) : (
          <ul className={styles.authorsList}>
            {authors.map((elem) => (
              <li key={elem.author}>{elem.author}</li>
            ))}
          </ul>
        )}
      </p>
    </div>
  );
};

export default NewsBanner;
