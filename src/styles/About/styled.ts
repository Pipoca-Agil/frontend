/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const BackgroundDiv = styled.div`
    background-color: #FAEDED;
    width: 100%;
`;

export const Wrapper = styled.section`
    display: flex;
    padding: 0 1rem;
    display: flex;
    padding: 0 1rem;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;

    @media (max-width: 1025px) {
        text-align: center;
        margin: auto;
        padding-left: 0rem;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        flex-direction: column;
      }
`;

export const InformationDiv = styled.div`
    padding: 6.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.5rem;
    width: 65%;
    padding-left: 10rem;

    @media (max-width: 1025px) {
        align-items: center;
        margin: auto;
        padding-left: 0rem;
      }

    @media (max-width: 926px) and (max-height: 926px) {
        align-items: center;
        margin: auto;
        padding-left: 0rem;
      }
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 926px) and (max-height: 926px) {
        width: 321px;
      }
`;

export const Title = styled.h2`
    color: #B33B3B;
    font-family: 'Maven Pro', sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;

    @media (max-width: 926px) and (max-height: 926px) {
        font-size: 3.2rem;
      }
`;

export const Span = styled.span`
    color: #455F6B;
    font-family: 'Maven Pro', sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;

    @media (max-width: 926px) and (max-height: 926px) {
        font-size: 3.2rem;
      }
`;

export const PodcastDescription = styled.p`
    color: #292929;
    font-family: Inter;
    font-size: 1.6rem;

    @media (max-width: 1025px) {
        font-size: 2.5rem;
        text-align: center;
        width: 734px;
        max-width: 100%;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        font-size: 2.0rem;
        width: 301px;
      }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;

`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.1rem;

    @media (max-width: 926px) and (max-height: 926px) {
        flex-direction: column;
        width: 271px;
      }
`;

export const CheckIcon = styled.img`
    content: url('/icons/check.svg');
    width: 1.5rem;
    height: 1.5rem;
`;

export const ItemInformation = styled.p`
    color: #455F6B;
    font-family: Inter;
    font-size: 1.6rem;

    @media (max-width: 1025px) {
        font-size: 2.5rem;
        text-align: left;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        text-align: center;
        font-size: 1.6rem;
      }
`;

export const BalloonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    padding-right: 10rem;

    @media (max-width: 1025px) {
        position: relative;
        margin-left: 45%;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        padding-right: 0;
        margin-left: 0%;
      }
`;

export const Balloon = styled.img`
    height: 27.4375rem;
    width: 28.8125rem;

    @media (max-width: 1025px) {
        height: 35.5rem;
        width: 41.9rem; 
    }

    @media (max-width: 926px) and (max-height: 926px) {
        height: 14.4rem;
        width: 16.996rem; 
        margin: auto;
      }

`;

export const DivWrappers = styled.div`

      flex-direction: column;
`;
