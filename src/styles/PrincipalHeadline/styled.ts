/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-block: 10rem;
    font-family: 'Inter';
    color: #2D2D2D;

    @media (max-width: 926px) and (max-height: 926px) {
        padding-block: 5rem;
      }

      @media (max-width: 1025px) {
        padding-block: 5rem;
      }
`;

export const Title = styled.h1`
    color: #B33B3B;
    text-align: center;
    font-family: Maven Pro;
    font-size: 4.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.95rem;
    margin-bottom: 2.5rem;

    @media (max-width: 926px) and (max-height: 926px) {
        font-size: 4.2rem;
      }

      @media (max-width: 1025px) {
        font-size: 64px;
       }
`;

export const SubTitle = styled.h2`
    color: #292929;
    text-align: center;
    font-family: Maven Pro;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 2.8rem;

    @media (max-width: 926px) and (max-height: 926px) {
       font-size: 12px;
      }

      
    @media (max-width: 1025px) {
        font-size: 40px;
       }
`;

export const PositionWrapper = styled.div`
    margin: 0 auto;
`;
