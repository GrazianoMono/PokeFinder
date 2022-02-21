import PropTypes from 'prop-types';
import PokeAvatar from '../../atoms/pokeAvatar';
import Abilities from '../../molecules/abilities';
import './pokemon.scss';

function Pokemon({ pokemon, abilities }) {
	return (
		<div className="pokemon">
			{pokemon && (
				<>
					<h2 className="pokemon__name">
						{pokemon.name + ' ' + pokemon.order}
					</h2>
					<PokeAvatar
						src={pokemon.sprites.front_default}></PokeAvatar>
					<Abilities abilities={abilities}></Abilities>
				</>
			)}
			{!pokemon && (
				<>
					<h2 className="pokemon__name">MissingNo</h2>
					<PokeAvatar></PokeAvatar>
				</>
			)}
		</div>
	);
}

Pokemon.propTypes = {
	pokemon: PropTypes.object,
	abilities: PropTypes.array,
};

export default Pokemon;
