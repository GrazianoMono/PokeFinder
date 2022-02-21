import MissingNo from '../../../assets/images/MissingNo.png';
import './pokeAvatar.scss';
import PropTypes from 'prop-types';

function PokeAvatar({ src, alt }) {
	return <img className="pokeAvatar" src={src || MissingNo} alt={alt} />;
}

PokeAvatar.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
};

export default PokeAvatar;
