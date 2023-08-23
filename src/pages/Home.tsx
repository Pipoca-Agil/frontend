import React from 'react';
import { HomeContainer } from '../styles/Home';
import PrincipalHeadline from '../components/PrincipalHeadline/index'
import MostListenedEpisodes from '../components/MostListenedEpisodes'
import About from '../components/About'
import OurGuests, { IGuestCarousel } from '../components/OurGuests/index'
import GetGuests from '../api/GetGuests'

const mockGuests = GetGuests()

const HomePage: React.FC = () => {
	const [guests, ] = React.useState<IGuestCarousel[]>(mockGuests)

	return (
		<HomeContainer>
			<PrincipalHeadline />
			<MostListenedEpisodes />
			<About />
			<OurGuests guests={guests}/>
		</HomeContainer>
	);
};

export default HomePage;
