import React from 'react';
import * as S from '../../styles/ListenOnPlataforms/styled';
import ApplePodcast from '../../assets/logos/applepodcast.svg';
import Spotify from '../../assets/logos/spotify.svg';
import YouTube from '../../assets/logos/youtube.svg';

export default function ListenOnPlatforms() {
    return (
        <S.ListenOnPlatforms>
			<S.Title>
				Ouça nas plataformas
			</S.Title>
			<S.PlataformLogosDiv>
			<S.Platform href="https://podcasts.apple.com/us/podcast/pipoca-%C3%A1gil/id1490753920" target="_blank">
				<S.PlatformIcon src={ApplePodcast}/>
				<S.PlatformName>Apple Podcast</S.PlatformName>
			</S.Platform>
			<S.Platform href="https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J" target="_blank">
				<S.PlatformIcon src={Spotify}/>
				<S.PlatformName>Spotify</S.PlatformName>
			</S.Platform>
			<S.Platform href="https://www.youtube.com/@PipocaAgil" target="_blank">
				<S.PlatformIcon src={YouTube}/>
				<S.PlatformName>YouTube</S.PlatformName>
			</S.Platform>
			</S.PlataformLogosDiv>
		</S.ListenOnPlatforms>
    )
}