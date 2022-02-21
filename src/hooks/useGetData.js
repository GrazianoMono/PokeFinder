import { useReducer } from 'react';

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';

function reducer(state, action) {
	switch (action.type) {
		case 'loading':
			return {
				status: 'loading',
				loading: true,
			};
		case 'success':
			return {
				status: 'success',
				loading: false,
				pokemon: action.pokemon,
				abilities: action.abilities,
			};
		case 'error':
			return {
				status: 'error',
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
}

function useGetData() {
	const [state, dispatch] = useReducer(reducer, {});

	const fetchData = async (query) => {
		dispatch({ type: 'loading' });
		try {
			const res = await fetch(pokeUrl + query);
			const data = await res.json();
			const abilitiesInfo = data.moves.slice(0, 4);
			const abilities = [];
			for (const ability of abilitiesInfo) {
				try {
					const abilityResponse = await fetch(ability.move.url);
					const abilityData = await abilityResponse.json();
					console.log(abilityData);
					abilities.push(abilityData);
				} catch (e) {
					console.error(e);
				}
			}
			dispatch({ type: 'success', pokemon: data, abilities });
		} catch (e) {
			dispatch({ type: 'error', error: e });
			console.error(e);
		}
	};

	return { state, fetchData };
}

export default useGetData;
