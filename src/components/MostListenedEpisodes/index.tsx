import {getMostListenedEpisodes} from '../../api/GetMostListenedEpisodes';
import EpisodeCard, {type IEpisodeCard} from '../EpisodeCard';
import * as S from '../../styles/MostListenedEpisodes/styled';
import React, { useState, useEffect, useRef } from 'react';

export default function MostListenedEpisodes() {
	const [episodes, setEpisodes] = React.useState<IEpisodeCard[]>([]);
	const carousel = useRef<HTMLDivElement | null>(null);
 	const [width, setWidth] = useState<number>(0);

	const getEpisodes = async () => {
		const newepisodes = await getMostListenedEpisodes();
		setEpisodes([...newepisodes]);
	};

	useEffect(() => {
		void getEpisodes();
		if (carousel.current) {
			setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth || 0));
		  }
	}, []);

	return (
		<>
			<S.Wrapper ref={carousel}>
				<S.Title>Episódios mais ouvidos</S.Title>
				<S.Carousel whileTap={{ cursor: 'grabbing' }}>
				<S.CardsWrapper drag="x" dragConstraints={{ right: 0, left: -width }}>
					{episodes.map((episode, index) => (
					<EpisodeCard {...episode} key={index} />
					))}
				</S.CardsWrapper>
				</S.Carousel>
				<S.SeeAllEpisodesDiv>
				<S.SeeAllEpisodes to="/">Ver todos os episódios</S.SeeAllEpisodes>
				</S.SeeAllEpisodesDiv>
			</S.Wrapper>
    	</>
	);
}