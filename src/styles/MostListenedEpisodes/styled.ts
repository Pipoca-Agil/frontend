/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1320px;
    margin: 0 auto;
    padding-block: 3rem;
`;


export const Title = styled.h2`
    font-family: 'Maven Pro', sans-serif;
    font-size: 3rem;
    color: #B33B3B;
    font-style: normal;
    font-weight: 700;
    width: 100%;
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

export const SeeAllEpisodesDiv = styled.div`
    width: 92.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SeeAllEpisodes = styled(Link)`
    display: flex;
    border: none;
    color: #B33B3B;
    font-family: 'Inter';
    font-size: 1.5rem;
    font-weight: 600;
    position: absolute;
    right: 1%;
`;
