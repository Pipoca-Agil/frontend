import React from 'react';
import { HomeContainer } from '../styles/Home';
import PrincipalHeadline from '../components/PrincipalHeadline/index'
import MostListenedEpisodes from '../components/MostListenedEpisodes'
import About from '../components/About'
import IntroSection from '../components/IntroSection';

const HomePage: React.FC = () => {
	return (
		<HomeContainer>
			<IntroSection />
			<MostListenedEpisodes />
			<About />
		</HomeContainer>
	);
};

export default HomePage;
