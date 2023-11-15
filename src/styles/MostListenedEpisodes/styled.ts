/* eslint-disable @typescript-eslint/naming-convention */
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: hidden;
    padding: 3rem 0rem;
`;


export const Title = styled.h2`
    padding: 0 1rem;
    max-width: 1320px;
    margin: 0 auto;
    font-family: 'Maven Pro', sans-serif;
    font-size: 3rem;
    color: #B33B3B;
    font-style: normal;
    font-weight: 700;
    width: 100%;

    @media (max-width: 926px) and (max-height: 926px) {
        margin-top: 20%;
        text-align: center;
        font-size: 3rem;
      }

      @media (max-width: 1025px) {
        margin-top: 20%;
        text-align: center;
    }


`;

export const Carousel = styled(motion.div)`
    cursor: grab;
    overflow: hidden;
    width: 3150px;
    padding-left: 30px;
`;

export const CardsWrapper = styled(motion.div)`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    overflow: hidden;
    padding: 0 1.5rem;
`;

export const SeeAllEpisodesDiv = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 0 1rem;
`;

export const SeeAllEpisodes = styled(Link)`
    border: none;
    color: #B33B3B;
    font-family: 'Inter';
    font-size: 1.5rem;
    font-weight: 600;

    @media (max-width: 1025px) {
        text-align: center;
        margin: 0 auto;
        font-size: 2.0rem;
    }
    
    @media (max-width: 926px) and (max-height: 926px) {
        text-align: center;
        margin: 0 auto;
        font-size: 2.0rem;
      } 
`;
