import { FC } from 'react';
import styles from './styles.module.css';
import {useTheme} from "../../context/ThemeContext";

interface IProps {
	keywords: string;
	setKeywords: (keywords: string) => void;
}

const Search: FC<IProps> = ({ keywords, setKeywords }) => {
	const { isDark } = useTheme();

	return (
		<form>
			<label>
				<input
					type="text"
					value={keywords}
					onChange={(e) => setKeywords(e.target.value)}
					className={`${styles.input} ${isDark ? styles.dark : styles.light}`}
					placeholder="Search..."
				/>
			</label>
		</form>
	);
};

export default Search;
