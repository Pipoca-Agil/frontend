/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const BalloonsWrapper = styled.div`
    display: flex;
    position: relative;
    width: 50rem;
`;

export const LeftBalloon = styled.img`
    position: absolute;
    width: 15rem;
    
`;

export const CenterBalloon = styled.img`
    position: absolute;
    width: 15rem;
    height: 100%;
    transform: translateY(50%);
    left: 30%;
    bottom: 30%;
`;

export const RightBalloon = styled.img`
    position: absolute;
    width: 15rem;
    transform: translateY(50%);
    left: 70%;
    bottom: 70%;
`;