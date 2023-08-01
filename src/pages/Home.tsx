import React from 'react';
import Header from '../components/Header/Header';
import LogoCarousel from '../components/carousel/logos/LogoCarousel';
const HomePage: React.FC = () => {
	const page = 'Home';
	return (
		<>
			<Header/>
			<LogoCarousel/>
		</>

	);
};

export default HomePage;
