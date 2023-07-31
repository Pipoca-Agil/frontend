/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import * as S from '../../styles/MostListenedEpisodes/EpisodeCard';

export interface IEpisodeCard {
	thumb: string;
	title: string;
	number: string;
	description: string;
	videoUrl: string;
}

export default function EpisodeCard(episode: IEpisodeCard) {
	return (
		<S.Card>
			<S.VideoThumbnail url={episode.thumb}/>
			<S.InformationWrapper>
				<S.EpisodeNumber>{episode.number}</S.EpisodeNumber>
				<S.EpisodeTitle>{episode.title}</S.EpisodeTitle>
				<S.EpisodeDescription>{episode.description}</S.EpisodeDescription>
			</S.InformationWrapper>
			<S.PlayButton>
				<S.PlayImg/>
			</S.PlayButton>
		</S.Card>
	);
}
