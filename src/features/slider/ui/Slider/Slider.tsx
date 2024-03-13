import React, { FC } from 'react';
import styles from './styles.module.css';
import { useRef } from 'react';

interface IProps {
	children: React.ReactElement;
	step?: number;
	isDark: boolean;
}

const Slider: FC<IProps> = ({ children, step = 150,isDark}) => {
	const sliderRef = useRef<HTMLElement | null>(null);

	const scrollLeft = () => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollLeft -= step;
	};

	const scrollRight = () => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollLeft += step;
	};

	return (
		<div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
			<button className={styles.arrow} onClick={scrollLeft}>
				&#5176;
			</button>
			{React.cloneElement(children, { ref: sliderRef })}
			<button className={styles.arrow} onClick={scrollRight}>
				&#5171;
			</button>
		</div>
	);
};

export default Slider;
