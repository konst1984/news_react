import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import NewsBanner from "../components/NewsBanner/NewsBanner.jsx";
import { getNews } from "../api/apiNew.js";
import NewsList from "../components/NewsList/NewsList.jsx";
import Skeleton from "../components/Skeleton/Skeleton.jsx";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const res = await getNews();
        setNews(res.news);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}
      {/*<LatestNews />*/}

      {/*<NewsByFilters />*/}
      {isLoading ? (
        <Skeleton count={10} type="item" />
      ) : (
        <NewsList news={news} />
      )}
    </main>
  );
};

export default Main;
