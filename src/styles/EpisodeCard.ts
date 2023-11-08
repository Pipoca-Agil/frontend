/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 1.2rem ;
    min-width: 600px;
    height: 135px;
    justify-content: center;
    border-radius: 24px;
    border: 3px solid #A6A6A6;
`;



export const VideoThumbnail = styled.img<{url: string}>`
    width: 110px;
    height: 110px;
    border-radius: 18px;
    box-shadow: 1px 1px 6px #00000057;
    content: ${props => `url(${props.url})`};
`;

export const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0 1.2rem 0 1.2rem;
    width: 80%;
    height: 100%;
    position: relative;
`; 

export const EpisodeNumber = styled.p`
    color: #B33B3B;
    font-family: Maven Pro;
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 15px;
    line-height: 15px;
    margin-top: 7px;
`;

export const EpisodeTitle = styled.h3`
    color: #455F6B;
    font-family: Maven Pro;
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 700;
    flex-wrap: nowrap;
    width: 22.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    margin-left: 15px;
    line-height: 25px;
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
    width: 1.7rem;
    cursor: pointer;
`;
export const PlayImgSpotify = styled.img`
    width: 3.2rem;
    cursor: pointer;
`;


export const ContainerImgDescription = styled.p`
    display: flex;
    width:100%;
    align-items: center;
    justify-content: center;
`


export const ContentPlayerIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:95%;
    position: absolute;
    bottom: 0.5rem;
    
    a{
        display: flex;
        text-decoration: none;
    }
`;
export const linkPlayer = styled.div`
    width: 200px;
    height: 30px;
    background-color: #A61E1E;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    align-items:center;
    border-radius: 20px;
    padding: 0.2rem 1.7rem;
    margin-left: 5px;
    cursor: pointer;
    
`;


export const TextPlay = styled.p`
    font-size: 20px;
    font-family: "Inter", Sans-serif;
    font-weight: 600; 
    color: #FFFFFF;
    margin-left: 1.7rem;
`;


