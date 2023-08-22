import React from 'react';
import PrincipalHeadline from '../PrincipalHeadline/index'
import BalloonAside from '../BalloonsAside/index';
import * as S from '../../styles/IntroSection/style';

export default function IntroSection() {
    return(
        <S.IntroWrapper>
            <PrincipalHeadline/>
            <BalloonAside/>
        </S.IntroWrapper>
    )
}