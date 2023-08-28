/* eslint-disable @typescript-eslint/naming-convention */
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 2rem 5rem 2rem;
`;

export const Section = styled.div<{logoSection: boolean}>`
    display: flex;
    flex-direction: column;
    ${props => props.logoSection ? css`gap: 1.51rem;` : css`gap: 2rem;`};
`;

export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.81rem;
`;

export const RightDiv = styled.div`
    display: flex;
    gap: 3.06rem;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const DefaultText = styled.p`
    font-family: 'Inter';
    width: 23rem;
    font-size: 1.5rem;
    color: #455F6B;
`;

export const Links = styled(Link)`
    color: #455F6B;
    font-family: 'Inter';
    text-decoration: none;
    font-size: 1.5rem;
`;

export const SectionTitle = styled.h6`
    color: #455F6B;
    font-family: 'Maven Pro', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 26.4px;
`;

export const Icons = styled.a<{url: string, logo?: boolean}>`
    content: ${props => `url(${props.url})`};
    ${props => props.logo ? css`
    width: 8.375rem;
    height: 7.49225rem;
    `
    :
    css`
    width: 3rem;
    height: 3rem;
    `}
`;

export const IconsDiv = styled.div`
    display: flex;
    gap: 2rem;
`;
