import styles from "./styles.module.css";
import Image from "@/shared/ui/Image/Image";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { FC } from "react";
import { INews } from "../..";

interface IProps {
    item: INews;
}

const NewsDetails: FC<IProps> = ({ item }) => {
    return (
        <div className={styles.details}>
            <Image image={item.image} />

            <div className={styles.description}>
                <p>
                    {item.description} ({item.language}){" "}
                    <a target="_blank" href={item.url}>
                        Read more...
                    </a>
                </p>
                <p className={styles.extra}>
                    {formatTimeAgo(item.published)} by {item.author}
                </p>

                <ul>
                    {item.category.map((category) => {
                        return (
                            <div>
                                <span>Categorories:{"  "} </span>
                                <button className={styles.active}>
                                    {category}
                                </button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default NewsDetails;
