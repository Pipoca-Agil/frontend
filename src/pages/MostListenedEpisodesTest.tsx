import {getMostListenedEpisodes} from '../api/GetMostListenedEpisodes';
import EpisodeCard, {type IEpisodeCard} from '../components/EpisodeCard';
import * as S from '../styles/MostListenedEpisodes/Section';
import React from 'react';

export default function MostListenedTest() {
	const [episodes, setEpisodes] = React.useState<IEpisodeCard[]>([]);

	const getEpisodes = async () => {
		const newepisodes = await getMostListenedEpisodes();
		setEpisodes([...newepisodes]);
	};

	React.useEffect(() => {
		void getEpisodes();
	}, []);

	return (
		<S.Wrapper>
			<S.Title>EPISÓDIOS MAIS OUVIDOS</S.Title>
			{episodes.map((episode, index) => (
				<EpisodeCard {...episode} key={index}/>
			))}
			<S.SeePlaylistDiv>
				<S.SeePlaylistButton>Ver Playlist</S.SeePlaylistButton>
			</S.SeePlaylistDiv>
		</S.Wrapper>
	);
}
