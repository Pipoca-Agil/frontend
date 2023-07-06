import React from 'react';
import Header from '../components/Header/Header';
import imgHome from '../assets/Time Vermelho 2.png';
import {ImgHome} from '../styles/Home';
const HomePage: React.FC = () => {
	const page = 'Home';
	return (
		<div>
			<Header/>
			<ImgHome src={imgHome}/>
		</div>

	);
};

export default HomePage;
