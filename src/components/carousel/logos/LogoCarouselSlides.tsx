import React from 'react';
import img1 from '../../../assets/carousel/logoCarousel/1.jpg';
import img2 from '../../../assets/carousel/logoCarousel/2.jpg';
import img3 from '../../../assets/carousel/logoCarousel/3.jpg';
import img4 from '../../../assets/carousel/logoCarousel/4.jpeg';
import img5 from '../../../assets/carousel/logoCarousel/5.png';
import img6 from '../../../assets/carousel/logoCarousel/6.avif';
import img7 from '../../../assets/carousel/logoCarousel/7.jpeg';
import img8 from '../../../assets/carousel/logoCarousel/8.jpeg';
import img9 from '../../../assets/carousel/logoCarousel/9.png';
import img10 from '../../../assets/carousel/logoCarousel/10.jpg';
import img11 from '../../../assets/carousel/logoCarousel/11.png';
import img12 from '../../../assets/carousel/logoCarousel/12.png';
import img13 from '../../../assets/carousel/logoCarousel/13.png';
import img14 from '../../../assets/carousel/logoCarousel/14.png';
import img15 from '../../../assets/carousel/logoCarousel/15.png';
import img16 from '../../../assets/carousel/logoCarousel/16.png';
import img17 from '../../../assets/carousel/logoCarousel/17.png';
import img18 from '../../../assets/carousel/logoCarousel/18.png';
import img19 from '../../../assets/carousel/logoCarousel/19.png';
import img20 from '../../../assets/carousel/logoCarousel/20.jpeg';
import img21 from '../../../assets/carousel/logoCarousel/21.png';
import img22 from '../../../assets/carousel/logoCarousel/22.png';
import img23 from '../../../assets/carousel/logoCarousel/23.png';
import img24 from '../../../assets/carousel/logoCarousel/24.png';
import img25 from '../../../assets/carousel/logoCarousel/25.png';
import img26 from '../../../assets/carousel/logoCarousel/26.png';
import img27 from '../../../assets/carousel/logoCarousel/27.png';
import img28 from '../../../assets/carousel/logoCarousel/28.jpg';
import {Logos, LogosSlide, LogoImg} from '../../../styles/LogoCarousel';

const LogoCarouselSlides: React.FC = () => {
	const logos = [
		img1,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		img9,
		img10,
		img11,
		img12,
		img13,
		img14,
		img15,
		img16,
		img17,
		img18,
		img19,
		img20,
		img21,
		img22,
		img23,
		img24,
		img25,
		img26,
		img27,
		img28,
	];
	const carouselItems = (logosList: string[]) => logosList.map(item => <LogoImg alt='logo' src={item} key={item}/>);

	const repeatItems = (max: number, logosList: string[]): React.ReactNode => {
		if (max > 2) {
			return;
		}

		max++;
		return (
			<>
				<LogosSlide>
					{carouselItems(logosList)}
				</LogosSlide>
				{repeatItems(max, logosList)}
			</>
		);
	};

	return (
		<Logos>
			{repeatItems(1, logos)}
		</Logos>
	);
};

export default LogoCarouselSlides;
