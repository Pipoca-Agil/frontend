/* eslint-disable @typescript-eslint/naming-convention */
import styled, {css, keyframes} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Title = styled.h3`
    color: #B33B3B;
    font-family: Maven Pro;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    line-height: normal;
    margin-bottom: 1.7rem;

    @media (max-width: 1025px) {
        font-size: 2rem;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        font-size: 1.5rem;
    }
`;

export const AudioMessage = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FaceImage = styled.img`
    width: 4rem;
    margin-left: 1.3rem;
    flex-direction: flex-start;
`;

export const CardWrapper = styled.div`
    padding: 0.6rem 1rem;
    border-radius: 1.5rem;
    border: 2px solid #B33B3B;
    display: flex;
    align-items: center;
    justify-content: space-between; 

`;

export const PlayPauseButton = styled.div`
    display: flex;
    align-items: center; /* Centraliza verticalmente no eixo Y */
    justify-content: center;
`;

export const PlayPauseIcon = styled.img`
    height: 1.8rem;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
`;

export const SoundWaveContainer = styled.div`
    position: relative; 
    display: flex;
    align-items: center;

    
`;

export const UnderDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const TopDiv = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
`;

export const UnderWaveImage = styled.img`
    height: 3rem;
    width: 100%;
`;

export const AudioTimer = styled.time`
    color: #3D3D3D;
    width: 3.1rem;
    text-align: center;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
   
`;

type ImgProps = {
	clipPathPercentage: number;
};

export const TopWaveImage = styled.img<ImgProps>`
    height: 3rem;
    width: 100%;
    filter: brightness(0.2); 
    transition: all 0.2s linear;
    clip-path: ${props =>
		props.clipPathPercentage
			? `polygon(0 0, ${props.clipPathPercentage}% 0, ${props.clipPathPercentage}% 100%, 0% 100%)`
			: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)'};
`;
