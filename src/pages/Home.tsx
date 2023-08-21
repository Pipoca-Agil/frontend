import React from 'react';
import { HomeContainer } from '../styles/Home';
import PrincipalHeadline from '../components/PrincipalHeadline/index'
import MostListenedEpisodes from '../components/MostListenedEpisodes'
import About from '../components/About'

const HomePage: React.FC = () => {
	return (
		<HomeContainer>
			<PrincipalHeadline />
			<MostListenedEpisodes />
			<About />
		</HomeContainer>
	);
};

export default HomePage;
