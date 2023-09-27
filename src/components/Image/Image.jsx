import styles from "./styles.module.css";
import { useRef } from "react";
import NotPicture from "../../assets/notPicture.webp";

const Image = ({ image }) => {
  const ref = useRef(null);

  return (
    <div className={styles.wrapper}>
      {image ? (
        <img
          src={image}
          alt="news"
          className={styles.image}
          ref={ref}
          onError={() => (ref.current.src = NotPicture)}
        />
      ) : null}
    </div>
  );
};

export default Image;
