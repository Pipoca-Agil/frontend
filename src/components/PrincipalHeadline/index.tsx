import React from 'react';
import * as S from '../../styles/PrincipalHeadline/styled';
import AudioMessage from '../AudioMessage/index';
import ListenOnPlatforms from '../ListenOnPlatforms/index';

export default function PrincipalHeadline() {
	return (
		<S.Wrapper>
			<S.Title>
				Pipoca Ágil
			</S.Title>
			<S.SubTitle>
				O maior podcast do mundo ágil!
			</S.SubTitle>
			<S.PositionWrapper>
				<AudioMessage/>
				<ListenOnPlatforms/>
			</S.PositionWrapper>
		</S.Wrapper>
	);
}
