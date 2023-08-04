import React, {useState, useEffect} from 'react';
import {slidesInfo} from './framesText';
import leftArrow from '../../../assets/carousel/sliderPhotos/leftVector.svg';
import rightArrow from '../../../assets/carousel/sliderPhotos/rightVector.svg';
import leftQuote from '../../../assets/carousel/sliderPhotos/“.png';
import rightQuote from '../../../assets/carousel/sliderPhotos/”.png';
import {
	GuestsCarouselTrack,
	EpisodyWrapper,
	CarouselSectionName,
	InfoEpisodyWrapper, EpisodyPhrase, PhotoEpisodyGuest,
	EpisodyDetails, Episody, Indicators, Indicator, ArrowButton,
} from '../../../styles/GuestsCarousel';

const GuestsCarousel: React.FC = () => {
	const [slide, setSlide] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setSlide(prevSlide => (prevSlide === slidesInfo.length - 1 ? 0 : prevSlide + 1));
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const nextSlide = () => {
		setSlide(slide === slidesInfo.length - 1 ? 0 : slide + 1);
	};

	const prevSlide = () => {
		setSlide(slide === 0 ? slidesInfo.length - 1 : slide - 1);
	};

	return (
		<div>
			<CarouselSectionName>Nossos convidados</CarouselSectionName>
			<GuestsCarouselTrack>
				<ArrowButton onClick={prevSlide}>
					<img src={leftArrow}/>
				</ArrowButton>

				{slidesInfo.map(({id, photoPath, phrase, title, episody, guestName}, index) => (
					<EpisodyWrapper key={id} className={slide === index ? 'slide' : 'slide slide-hidden'}>
						<PhotoEpisodyGuest src={photoPath} />
						<InfoEpisodyWrapper >
							<EpisodyPhrase>
								<img src={leftQuote} className='left' />
								<h1>{phrase}</h1>
								<img src={rightQuote} className='right' />
							</EpisodyPhrase>
							<EpisodyDetails>
								<h1>{title}</h1>
								<Episody>
									<span>{episody}</span>
									<span>{guestName}</span>
								</Episody>
							</EpisodyDetails>
						</InfoEpisodyWrapper>
					</EpisodyWrapper>
				))}
				<ArrowButton onClick={nextSlide}>
					<img src={rightArrow}/>
				</ArrowButton>
			</GuestsCarouselTrack>
			<Indicators className='indicators'>
				{slidesInfo.map((_, index) => (
					<Indicator
						key={index}
						className={
							slide === index ? 'indicator' : 'indicator indicator-inactive'
						}
						onClick={() => {
							setSlide(index);
						}}
					></Indicator>
				))}
			</Indicators>

		</div>
	);
};

export default GuestsCarousel;
