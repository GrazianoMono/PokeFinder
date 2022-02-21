import { useState } from 'react';
import SearchBar from '../../components/atoms/searchBar';
import Pokemon from '../../components/organism/pokemon';
import Loading from '../../components/atoms/loading';
import './pokeFinder.scss';
import useGetData from '../../hooks/useGetData';

function SearchPokemon() {
	const { state, fetchData } = useGetData();

	const onSearch = () => {
		fetchData(search);
	};

	const [search, setSearch] = useState('');

	const onSearchChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="pokefinder">
			<SearchBar
				onSearch={onSearch}
				search={search}
				onSearchChange={onSearchChange}
			/>
			{state.status === 'error' && (
				<p style={{ color: 'red', fontWeight: 'bold' }}>
					Qualcosa é andato storto
				</p>
			)}
			{!state.loading && (
				<Pokemon pokemon={state.pokemon} abilities={state.abilities} />
			)}
			{state.loading && <Loading />}
		</div>
	);
}

export default SearchPokemon;
