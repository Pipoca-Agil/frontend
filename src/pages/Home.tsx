import React from 'react';
import Header from '../components/Header/Header';
import imgHome from '../assets/Time Vermelho 2.png';
// Import {ImgHome, HomeContainer} from '../styles/Home';
import CarouselLogo from '../components/carousel/Carousel';
const HomePage: React.FC = () => {
	const page = 'Home';
	return (
		<>
			<Header/>
			{/* <ImgHome src={imgHome} alt='default-homepage-img'/> */}
			<CarouselLogo/>
		</>

	);
};

export default HomePage;
