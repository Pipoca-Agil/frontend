/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    padding: 1.2rem 2rem;
    height: 11.75rem;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    border: 2px solid #A6A6A6;
`;

export const VideoThumbnail = styled.img<{url: string}>`
    height: 9.3rem;
    border-radius: 0.9rem;
    content: ${props => `url(${props.url})`};
`;

export const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0 2rem;
`; 

export const EpisodeNumber = styled.p`
    color: #B33B3B;
    font-family: Maven Pro;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
`;

export const EpisodeTitle = styled.h3`
    color: #455F6B;
    font-family: Maven Pro;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    flex-wrap: nowrap;
    width: 22.3rem;
`;

export const EpisodeDescription = styled.p`
    color: #455F6B;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    flex-wrap: nowrap;    
`;   

export const PlayImg = styled.img`
    width: 3.6rem;
    cursor: pointer;
`;
