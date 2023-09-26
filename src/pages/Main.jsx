import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import NewsBanner from "../components/NewsBanner/NewsBanner.jsx";
import { getNews } from "../api/apiNews.js";
import NewsList from "../components/NewsList/NewsList.jsx";
import Skeleton from "../components/Skeleton/Skeleton.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const sizePage = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const res = await getNews(currentPage, sizePage);
      setNews(res.news);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((p) => p + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((p) => p - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    if (currentPage <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <main className={styles.main}>
      {news.length && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}
      {/*<LatestNews />*/}

      {/*<NewsByFilters />*/}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
      {isLoading ? (
        <Skeleton count={10} type="item" />
      ) : (
        <NewsList news={news} />
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </main>
  );
};

export default Main;
