/* eslint-disable react/no-unescaped-entities */
import * as S from '../../styles/About/styled';
import React from 'react';
import AboutBalloon from '../../assets/about/about-balloon.svg'

export default function About() {
	return (
		<S.BackgroundDiv>
			<S.Wrapper>
				<S.InformationDiv>
					<S.TitleContainer>
						<S.Title>
							O que faz o nosso podcast
							<S.Span> único</S.Span>
							?
						</S.Title>
					</S.TitleContainer>
					<S.PodcastDescription>
					Podcast "chão de fábrica", ajudando na divulgação de conteúdo do Mundo Ágil e contando casos e soluções para a implementação da Transformação Digital nas empresas. 
					</S.PodcastDescription>
					<S.List>
						<S.ListItem>
							<S.CheckIcon />
							<S.ItemInformation>
							Identifique-se com histórias do mundo ágil
							</S.ItemInformation>
						</S.ListItem>
						<S.ListItem>
							<S.CheckIcon />
							<S.ItemInformation>
							Acompanhamento de projetos práticos
							</S.ItemInformation>
						</S.ListItem>
						<S.ListItem>
							<S.CheckIcon />
							<S.ItemInformation>
							Aprenda com experiências de profissionais de diversas áreas 
							</S.ItemInformation>
						</S.ListItem>
					</S.List>
				</S.InformationDiv>
				<S.BalloonDiv>
					<S.Balloon src={AboutBalloon}/>
				</S.BalloonDiv>
			</S.Wrapper>
		</S.BackgroundDiv>
	);
}
