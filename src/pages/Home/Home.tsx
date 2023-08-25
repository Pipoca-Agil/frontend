import React from 'react';
import { HomeContainer } from '../../styles/Home';
import MostListenedEpisodes from '../../components/MostListenedEpisodes'
import About from '../../components/About'
import OurGuests, { IGuestCarousel } from '../../components/OurGuests/index'
import GetGuests from '../../api/GetGuests'
import IntroSection from '../../components/IntroSection';
import OurPartners from './components/OurPartners'

const mockGuests = GetGuests()


const HomePage: React.FC = () => {
	const [guests, ] = React.useState<IGuestCarousel[]>(mockGuests)

	return (
		<HomeContainer>
			<IntroSection />
			<MostListenedEpisodes />
			<About />
			<OurGuests guests={guests}/>
			<OurPartners />
		</HomeContainer>
	);
};

export default HomePage;
