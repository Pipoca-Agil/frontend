/* eslint-disable @typescript-eslint/naming-convention */
import styled, {css, keyframes} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-inline: 18.2rem;
    padding-block: 6rem;
`;

export const Title = styled.h3`
    color: #FD0000;
    font-family: Inter;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    line-height: normal;
    margin-bottom: 2.4rem;
`;

export const AudioMessage = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const FaceImage = styled.img`
    width: 6.5rem;
    margin-right: 2.8rem;
`;

export const CardWrapper = styled.div`
    height: 6.8rem;
    padding: 1.4rem 1rem 0.9rem 2.2rem;
    border-radius: 2.4rem;
    border: 2px solid #B33B3B;
    display: flex;
    align-items: center;
`;

export const PlayPauseButton = styled.div`
    margin-right: 1.1rem;
`;

export const PlayPauseIcon = styled.img`
    height: 3rem;
    width: 3rem;
    object-fit: cover;
    cursor: pointer;
`;

export const SoundWaveContainer = styled.div`
    position: relative; 
    display: flex;
`;

export const UnderDiv = styled.div`
`;

export const TopDiv = styled.div`
    position: absolute;
`;

export const UnderWaveImage = styled.img`
    height: 4.9rem;
    width: 100%;
`;

type ImgProps = {
	clipPathPercentage: number;
};

export const TopWaveImage = styled.img<ImgProps>`
    height: 4.9rem;
    width: 100%;
    filter: brightness(0.2); 
    transition: all 0.2s linear;
    clip-path: ${props =>
		props.clipPathPercentage
			? `polygon(0 0, ${props.clipPathPercentage}% 0, ${props.clipPathPercentage}% 100%, 0% 100%)`
			: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)'};
`;
