import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import NewsBanner from "../components/NewsBanner/NewsBanner.jsx";
import { getNews } from "../api/apiNew.js";
import NewsList from "../components/NewsList/NewsList.jsx";

const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews();
        setNews(res.news);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length ? <NewsBanner item={news[0]} /> : null}
      {/*<LatestNews />*/}

      {/*<NewsByFilters />*/}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
