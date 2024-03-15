import { INews, NewsCard } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withSkeleton";
import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

interface IProps {
    news?: INews[];
    type?: "banner" | "item";
    direction?: "row" | "column";
    viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsList: FC<IProps> = ({ news, type = "item", viewNewsSlot }) => {
    return (
        <ul className={`${type === "item" ? styles.items : styles.banners}`}>
            {news?.map((item) => {
                return (
                    <NewsCard
                        key={item.id}
                        item={item}
                        type={type}
                        viewNewsSlot={viewNewsSlot}
                    />
                );
            })}
        </ul>
    );
};

const NewListWithSkeleton = withSkeleton<IProps>(NewsList, 10);

export default NewListWithSkeleton;
