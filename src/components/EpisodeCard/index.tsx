/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import * as S from '../../styles/EpisodeCard';
import Play from '../../assets/icons/icon-player-white.svg'
import IconSpotify from '../../assets/icons/icon-spotify.svg'



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
			<S.ContainerImgDescription>
				<S.VideoThumbnail url={episode.thumb}/>
				<S.InformationWrapper>
					<S.EpisodeNumber>{episode.number}</S.EpisodeNumber>
					<S.EpisodeTitle>{episode.title}</S.EpisodeTitle>
					{/* <S.EpisodeDescription>{episode.description}</S.EpisodeDescription> */}
					<S.ContentPlayerIcon>
						<a href={episode.videoUrl} target='_blank' rel='noreferrer'>
							<S.linkPlayer>
								
								<S.PlayImg src={Play}/>
								<S.TextPlay>Ouvir</S.TextPlay>
								
							</S.linkPlayer>
						</a>
						{/* https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J */}
							<a href="https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J" target='_blank' rel='noreferrer'>
								<S.PlayImgSpotify src={IconSpotify}/>
							</a>
					</S.ContentPlayerIcon>
				</S.InformationWrapper>
				
			</S.ContainerImgDescription>
			
		</S.Card>
	);
}
