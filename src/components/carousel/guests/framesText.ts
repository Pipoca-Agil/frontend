import img1 from '../../../assets/carousel/sliderPhotos/woman-wearing-headphones-running-podcast 1.png';
import img2 from '../../../assets/carousel/sliderPhotos/portrait-smiling-presenter-streaming-podcast-using-microphone-social-media-influencer-with-headphones-recording-live-stream-camera-content-creator-live-broadcasting-home-studio 1.png';
import img3 from '../../../assets/carousel/sliderPhotos/medium-shot-smiley-man-radio 1.png';
const episodyInfo = (
	id: number,
	photoPath: string,
	phrase: string,
	title: string,
	episody: string,
	guestName: string,
) => ({
	id,
	photoPath,
	phrase,
	title,
	episody: episody.toUpperCase(),
	guestName: guestName.toUpperCase(),
});

const firstSlideEpisodyInfo = episodyInfo(
	1,
	img1,
	'Para ser Scrum precisa colaborar e ser proativo.',
	'Começando a ser um Scrum Master',
	'EPISÓDIO #439',
	'AKACIA PARK',
);
const secondSlideEpisodyInfo = episodyInfo(
	2,
	img2,
	'Para ser Scrum precisa colaborar e ser proativo.',
	'O papel do Agilista Estratégico na resolução de problemas',
	'EPISÓDIO #442',
	'ANA SILVA',
);

const thirdSlideEpisodyInfo = episodyInfo(
	3,
	img3,
	'Para ser Scrum precisa colaborar e ser proativo.',
	'O papel do Agilista Estratégico na resolução de problemas',
	'EPISÓDIO #442',
	'ANA SILVA',
);

export const slidesInfo = [
	firstSlideEpisodyInfo,
	secondSlideEpisodyInfo,
	thirdSlideEpisodyInfo,
];
