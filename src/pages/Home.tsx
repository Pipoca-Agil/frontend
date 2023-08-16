import React from 'react';
import imgHome from '../assets/Time Vermelho 2.png';
import {ImgHome, HomeContainer} from '../styles/Home';

const HomePage: React.FC = () => {
	return (
		<HomeContainer>

			<ImgHome src={imgHome} alt='default-homepage-img'/>

		</HomeContainer>
	);
};

export default HomePage;
