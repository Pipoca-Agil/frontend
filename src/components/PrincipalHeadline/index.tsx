import React from 'react';

import * as S from '../../styles/PrincipalHeadline/styled';

export default function PrincipalHeadline() {
	return (
		<S.Wrapper>
			<S.Title>
				PIPOCA ÁGIL
			</S.Title>
			<S.SubTitle>
				O maior podcast do <br/>
				mundo ágil!
			</S.SubTitle>
			<S.ButtonDiv>
				<a href='https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J?si=3ebb7f18b6aa4bba&nd=1' target='_blank' rel='noreferrer'>
					<S.Button buttonType='type2'>Ouvir podcast</S.Button>
				</a>
				<a href='https://www.youtube.com/@PipocaAgil' target='_blank' rel='noreferrer'>
					<S.Button buttonType='type1'>Conhecer o canal</S.Button>
				</a>
			</S.ButtonDiv>
		</S.Wrapper>
	);
}
