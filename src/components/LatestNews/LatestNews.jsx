import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";


const LatestNews = ({ data, isLoading }) => {

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
