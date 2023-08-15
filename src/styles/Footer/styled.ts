/* eslint-disable @typescript-eslint/naming-convention */
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 8.9rem 10.9rem 8.5rem 7.3rem;
`;

export const Section = styled.div<{logoSection: boolean}>`
    display: flex;
    flex-direction: column;
    ${props => props.logoSection ? css`gap: 2.412rem;` : css`gap: 3.2rem;`};
`;

export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.1rem;
`;

export const RightDiv = styled.div`
    display: flex;
    gap: 4.9rem;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const DefaultText = styled.p`
    font-family: 'Inter';
    width: 38.2rem;
    font-size: 2.4rem;
`;

export const Links = styled(Link)`
    font-family: 'Inter';
    text-decoration: none;
    color: black;
    font-size: 2.4rem;
`;

export const SectionTitle = styled.h6`
    font-family: 'Maven Pro', sans-serif;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 26.4px;
`;

export const Icons = styled.img<{url: string, logo?: boolean}>`
    content: ${props => `url(${props.url})`};
    ${props => props.logo ? css`
    width: 13.4rem;
    height: 11.9rem;
    ` : ''}
`;

export const IconsDiv = styled.div`
    display: flex;
    gap: 3.2rem;
`;
