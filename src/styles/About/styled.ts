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
`;

export const InformationDiv = styled.div`
    padding: 6.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.5rem;
    width: 65%;
    padding-left: 10rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

export const Title = styled.h2`
    color: #B33B3B;
    font-family: 'Maven Pro', sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
`;

export const Span = styled.span`
    color: #455F6B;
    font-family: 'Maven Pro', sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
`;

export const PodcastDescription = styled.p`
    color: #292929;
    font-family: Inter;
    font-size: 1.6rem;
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
`;

export const BalloonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    padding-right: 10rem;
`;

export const Balloon = styled.img`
    height: 27.4375rem;
    width: 28.8125rem;
`;