/* eslint-disable react/no-unescaped-entities */
import EpisodeCard, {type IEpisodeCard} from '../EpisodeCard';
import * as S from '../../styles/About/styled';
import React from 'react';

const aboutVideo: IEpisodeCard = {
	title: 'A origem do nome do podcast Pipoca Ágil',
	description: 'Como tudo começou...',
	number: 'EPISÓDIO #444',
	videoUrl: 'https://www.youtube.com/watch?v=qhnHcfTo1SQ',
	thumb: 'https://i.ytimg.com/vi/qhnHcfTo1SQ/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLBiCdr4wXOVlePuYCWcMVaxqFW7fw',
};

export default function About() {
	return (
		<S.Wrapper>
			<S.TextContainer>
				<S.Title>SOBRE O PODCAST</S.Title>
				<S.Description>
                Sou por natureza um Facilitador e Entusiasta da
                Transformação Ágil e Digital. Atuando ativamente
                no Movimento Ágil como um todo.Idealizei e
                materializei o Podcast Pipoca Ágil, com o propósito
                de ser um podcast "chão de fábrica", ajudando na
                divulgação de conteúdo do Mundo Ágil e contando
                casos e soluções para a implementação da
                Transformação Digital nas empresas. Sou Head da
                Jornada Talks da Jornada Colaborativa. Co-autor do
                Livro de Inovação da Jornada Colaborativa. Co-autor
                do Livro Jornada Colaborativa. Sou Diretor de
                Comunicação e Marketing da IIBA Brasil
				</S.Description>
			</S.TextContainer>
			<EpisodeCard {...aboutVideo}/>
		</S.Wrapper>
	);
}
