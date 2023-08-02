/* eslint-disable @typescript-eslint/naming-convention */
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    padding-inline: 18.2rem;
    padding-bottom: 6.7rem;
    padding-top: 14.6rem;
    gap: 36rem;
`;

export const TopDiv = styled.div`
    display: flex;
    width: 89.6rem;
    align-items: center;
    justify-content: space-between;
`;

export const StreamingIcons = styled.div`
    display: flex;
    gap: 7rem;
    align-items: center;
`;

export const BottomDiv = styled.div`
    display: flex;
    width: 138.3rem;
    align-items: center;
    justify-content: space-between;
`;

export const BottomLeftContainer = styled.div`
    display: flex;
    gap: 18.2rem;
    align-items: center;
`;

export const NavigationList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const BottomRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const SocialMediaContainer = styled.ul`
    display: flex;
    gap: 2.4rem;
`;

export const Title = styled.h2`
    color: #B33B3B;
    font-family: 'Inter';
    width: 20rem;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const StreamingLink = styled.a<{url: string}>`
    width: 12.6rem;
    height: 12.6rem;
    background-image: ${props => `url(${props.url})`};
    background-size: cover;
    background-position: center;
`;

export const Logo = styled.img`
    content: url('/logo.svg');
`;

export const NavigationLinks = styled(Link)`
    color: #2D2D2D;
    font-family: 'Inter';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
`;

export const ContactText = styled.p`
    color: #2D2D2D;
    font-family: 'Inter';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const SocialMediaLink = styled.a<{linkImg: string}>`
    width: 3.8rem;
    height: 3.8rem;
    background-image: ${props => `url(${props.linkImg})`};
    background-position: center;
    background-size: cover;
`;
