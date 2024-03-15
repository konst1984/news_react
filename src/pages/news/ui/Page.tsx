import { useAppSelector } from "@/app/appStore";
import { NewsDetails } from "@/entities/news";
import { Link } from "react-router-dom";

const NewsPage = () => {
    const curentNews = useAppSelector((state) => state.news.currentNews);
    if (!curentNews) {
        return (
            <div>
                <h1>Cannot find news</h1>
                <Link to={"/"}>
                    <h3>{"<- Go to main page"}</h3>
                </Link>
            </div>
        );
    }
    return (
        <div>
            <h1>NewsPage</h1>
            <NewsDetails item={curentNews} />
        </div>
    );
};

export default NewsPage;
