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
    padding: 5rem 1rem;

    @media (max-width: 1025px)  {
        flex-direction: column;
      }
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

    @media (max-width: 1025px) {
        text-align: center;
        align-items: center;
        justify-content: center;
      }
`;

export const RightDiv = styled.div`
    display: flex;
    gap: 3.06rem;

    @media (max-width: 1025px) {
        display: none;
      }
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

    @media (max-width: 1025px) {
        text-align: center;
        font-size: 2.4rem;
      }
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

    @media (max-width: 1025px){
        text-align: center;
        font-size: 2.4rem;
        width: 290px;
      }
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

    @media (max-width: 1025px) {
        margin: auto;
        content: ${props => `url(${props.url})`};
        ${props => props.logo ? css`
        width: 134px;
        height: 119.88px;
        `
        :
        css`
        width: 4.8rem;
        height: 4.8rem;
        `}
      }
`;

export const IconsDiv = styled.div`
    display: flex;
    gap: 2rem;
`;
