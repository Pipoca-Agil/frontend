import {getMostListenedEpisodes} from '../../api/GetMostListenedEpisodes';
import EpisodeCard, {type IEpisodeCard} from '../EpisodeCard';
import * as S from '../../styles/MostListenedEpisodes/styled';
import React from 'react';

export default function MostListenedEpisodes() {
	const [episodes, setEpisodes] = React.useState<IEpisodeCard[]>([]);

	const getEpisodes = async () => {
		const newepisodes = await getMostListenedEpisodes();
		setEpisodes([...newepisodes]);
	};

	React.useEffect(() => {
		void getEpisodes();
	}, []);

	return (
		<>
			<S.Wrapper>
				<S.Title>Episódios mais ouvidos</S.Title>
				<S.CardsWrapper>
				{episodes.map((episode, index) => (
					<EpisodeCard {...episode} key={index}/>
				))}
				</S.CardsWrapper>
				<S.SeeAllEpisodesDiv>
					<S.SeeAllEpisodes to='/'>Ver todos os episódios
					</S.SeeAllEpisodes>
				</S.SeeAllEpisodesDiv>
			</S.Wrapper>
		</>
	);
}
