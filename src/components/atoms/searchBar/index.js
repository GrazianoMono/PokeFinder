import './searchBar.scss';

function SearchBar({ onSearch, search, onSearchChange }) {
	return (
		<div className="search-bar">
			<input
				className="search-bar__input"
				type="text"
				value={search}
				onChange={onSearchChange}
			/>
			<button className="search-bar__button" onClick={onSearch}>
				Search
			</button>
		</div>
	);
}

export default SearchBar;
