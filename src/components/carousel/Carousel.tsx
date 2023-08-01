import React from 'react';
import CarouselSlides from './CarouselSlides';
import {CarouselWrapper, CarouselTitle} from '../../styles/LogoCarousel';
const CarouselLogo = () => (
	<CarouselWrapper>
		<CarouselTitle>Nossos Parceiros</CarouselTitle>
		<CarouselSlides />
	</CarouselWrapper>
);

export default CarouselLogo;
