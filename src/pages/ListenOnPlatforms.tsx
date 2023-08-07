import React from 'react';
import * as S from '../styles/ListenOnPlatforms/styled';
import Footer from '../components/Footer';

export default function ListenOnPlatforms() {
	return (
		<>
			<S.Wrapper>
				<S.TopDiv>
					<S.Title>Ouça nas plataformas</S.Title>
					<S.StreamingIcons>
						<S.StreamingLink url='"/spotify.svg"' href='https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J?si=366cbd03737245e1'/>
						<S.StreamingLink url='"/youtube.svg"' href='https://www.youtube.com/@PipocaAgil'/>
					</S.StreamingIcons>
				</S.TopDiv>
				<S.BottomDiv>
					<S.BottomLeftContainer>
						<S.Logo />
						<S.NavigationList>
							<S.NavigationLinks to='/'>Sobre</S.NavigationLinks>
							<S.NavigationLinks to='/'>Episódios</S.NavigationLinks>
							<S.NavigationLinks to='/'>Blog</S.NavigationLinks>
						</S.NavigationList>
					</S.BottomLeftContainer>
					<S.BottomRightContainer>
						<S.ContactText>Contatos</S.ContactText>
						<S.SocialMediaContainer>
							<S.SocialMediaLink target='/' linkImg='"/icons/youtube.svg"'/>
							<S.SocialMediaLink target='/' linkImg='"/icons/instagram.svg"'/>
							<S.SocialMediaLink target='/' linkImg='"/icons/twitter.svg"'/>
							<S.SocialMediaLink target='/' linkImg='"/icons/facebook.svg"'/>
						</S.SocialMediaContainer>
					</S.BottomRightContainer>
				</S.BottomDiv>
			</S.Wrapper>
			<Footer/>
		</>
	);
}
