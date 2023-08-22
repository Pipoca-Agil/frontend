import React from "react"
import LeftBalloon from '../../assets/balloonsAside/leftBalloon.svg';
import CenterBalloon from '../../assets/balloonsAside/centerBalloon.svg';
import RightBalloon from '../../assets/balloonsAside/rightBalloon.svg';
import * as S from '../../styles/BalloonsAside/styled';

export default function BalloonsAside() {
    return (
        <S.BalloonsWrapper>
            <S.LeftBalloon src={LeftBalloon}/>
            <S.CenterBalloon src={CenterBalloon}/>
            <S.RightBalloon src={RightBalloon}/>
        </S.BalloonsWrapper>
    )
}