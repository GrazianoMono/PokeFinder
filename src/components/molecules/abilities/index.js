import PropTypes from 'prop-types';
import Ability from '../../atoms/ability';
import './abilities.scss';

function Abilities({ abilities }) {
	return (
		<div className="abilities">
			<div className="abilities__header">
				<p>Name</p>
				<p>Type</p>
				<p>Dmg</p>
			</div>
			{abilities &&
				abilities.map((move) => {
					return (
						<Ability
							key={move.id}
							name={move.name}
							type={move.type.name}
							dmg={move.power}
						/>
					);
				})}
		</div>
	);
}

Abilities.propTypes = {
	abilities: PropTypes.array,
};

export default Abilities;
