/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Wrapper = styled.section`
    background-color: #FAEDED;
    display: flex;
    width: 100%;
`

export const InformationDiv = styled.div`
    padding-block: 10.8rem;
    padding-left: 15rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5rem;
`

export const Title = styled.h2<{color: string}>`
    font-size: 3.8rem;
    color: ${props => props.color};
    font-family: 'Maven Pro', sans-serif;
    font-weight: 700;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

export const PodcastDescription = styled.p`
    font-family: Inter;
    font-size: 2rem;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2.4rem;
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const CheckIcon = styled.img`
    content: url('/icons/check.svg');
`

export const ItemInformation = styled.p`
    color: var(--letter, #455F6B);
    font-family: Inter;
    font-size: 2rem;
`

export const Balloon = styled.img`
    content: url('/about/balloon.svg');
    padding-top: 8rem;
    padding-right: 15rem;
`