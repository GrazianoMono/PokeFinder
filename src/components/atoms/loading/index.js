import './loading.scss';
import LoadingImage from '../../../assets/images/loading.svg';

function Loading() {
	return <img className="loading" src={LoadingImage} alt="loading" />;
}

export default Loading;
