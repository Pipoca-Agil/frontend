/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    padding: 1.8rem 3.3rem 2.1rem 3.3rem;
    width: 92.4rem;
    height: 18.8rem;
    gap: 10.4rem;
    align-items: center;
    justify-content: center;
    border-radius: 2.4rem;
    border: .4rem solid #A6A6A6;
`;

export const VideoThumbnail = styled.img<{url: string}>`
    width: 22.4rem;
    height: 14.9rem;
    border-radius: 1.4rem;
    content: ${props => `url(${props.url})`};
`;

export const EpisodeNumber = styled.p`
    color: #B33B3B;
    font-family: Inter;
    font-size: 1.8rem;
    font-weight: 600;
`;

export const EpisodeTitle = styled.h3`
    color: #2D2D2D;
    font-family: Inter;
    font-size: 2.4rem;
    font-weight: 800;
    
`;

export const EpisodeDescription = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 1.2rem;
    font-weight: 400;
`;

export const InformationWrapper = styled.div`
    width: 35.8rem;
    display: flex;
    flex-direction: column;
    gap: .9rem;
`;

export const PlayButton = styled.button`
    border: none;
    background-position: center;
    background-color: transparent;
    width: 5.8rem;
    height: 5.8rem;
`;

export const PlayImg = styled.img`
    content: url('/play.png');
`;
