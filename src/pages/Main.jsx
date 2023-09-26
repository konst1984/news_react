import { useEffect, useState } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner.jsx";
import { getCategories, getNews } from "../api/apiNews.js";
import NewsList from "../components/NewsList/NewsList.jsx";
import Skeleton from "../components/Skeleton/Skeleton.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import Categories from "../components/Categories/Categories.jsx";
import Search from "../components/Search/Search.jsx";
import { useDebounce } from "../helpers/hooks/useDebounce.js";
import styles from "./styles.module.css";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectCategory] = useState("");
  const [keywords, setKeyWords] = useState("");
  const totalPages = 10;
  const sizePage = 10;

  const debouncedKeywords = useDebounce(keywords, 500);

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const res = await getNews({
        page_number: currentPage,
        page_size: sizePage,
        category: selectedCategory === "all" ? null : selectedCategory,
        keywords: debouncedKeywords,
      });
      setNews(res.news);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.categories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKeywords]);

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
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectCategory}
      />
      <Search keywords={keywords} setKeywords={setKeyWords} />
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
