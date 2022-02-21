import './ability.scss';
import PropTypes from 'prop-types';

function Ability({ name, type, dmg }) {
	return (
		<div className="ability">
			<div className="ability__value">{name}</div>
			<div
				className={
					'ability__value ability__value--bold ability__value--' +
					type
				}>
				{type}
			</div>
			<div className="ability__value">{dmg}</div>
		</div>
	);
}

Ability.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	dmg: PropTypes.number,
};

export default Ability;
