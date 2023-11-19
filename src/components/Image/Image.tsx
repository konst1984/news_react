import styles from './styles.module.css';
import { FC, useRef } from 'react';
import NotPicture from '../../assets/notPicture.webp';

interface IProps {
	image: string | undefined;
	classname?: string;
}

const Image: FC<IProps> = ({ image, classname = '' }) => {
	const ref = useRef<HTMLImageElement | null>(null);

	const handleError = () => {
		if (ref.current) {
			ref.current.src = NotPicture;
		}
	};

	return (
		<div className={`${styles.wrapper} ${styles[classname]}`}>
			{image ? (
				<img src={image} alt="news" className={styles.image} ref={ref} onError={handleError} />
			) : null}
		</div>
	);
};

export default Image;
