import React from 'react';
import Header from '../components/Header/Header';
import imgHome from '../assets/Time Vermelho 2.png';
import {ImgHome, HomeContainer} from '../styles/Home';
import GuestsCarousel from '../components/carousel/guests/GuestsCarousel';
const HomePage: React.FC = () => {
	const page = 'Home';
	return (
		<HomeContainer>
			<Header/>
			{/* <ImgHome src={imgHome} alt='default-homepage-img'/> */}
			<GuestsCarousel/>
		</HomeContainer>

	);
};

export default HomePage;
