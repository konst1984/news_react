import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo.js";
import Image from "../Image/Image.jsx";
import { formatStr } from "../../helpers/formatTitle.js";

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <Image image={item.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{formatStr(item.title)}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
