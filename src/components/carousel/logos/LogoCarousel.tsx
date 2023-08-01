import React from 'react';
import LogoCarouselSlides from './LogoCarouselSlides';
import {LogoCarouselWrapper, CarouselTitle} from '../../../styles/LogoCarousel';
const LogoCarousel = () => (
	<LogoCarouselWrapper>
		<CarouselTitle>Nossos Parceiros</CarouselTitle>
		<LogoCarouselSlides />
	</LogoCarouselWrapper>
);

export default LogoCarousel;
