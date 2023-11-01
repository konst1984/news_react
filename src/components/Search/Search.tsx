import { FC } from 'react';
import styles from './styles.module.css';

interface IProps {
	keywords: string;
	setKeywords: (key: string, keywords: string) => void;
}

const Search: FC<IProps> = ({ keywords, setKeywords }) => {
	const handleChange = (keywords: string) => setKeywords('keywords', keywords);

	return (
		<form>
			<label>
				<input
					type="text"
					value={keywords}
					onChange={(e) => handleChange(e.target.value)}
					className={styles.input}
					placeholder="Search..."
				/>
			</label>
		</form>
	);
};

export default Search;
