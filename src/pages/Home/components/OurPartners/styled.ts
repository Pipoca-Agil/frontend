import styled, {css} from "styled-components";

export const Wrapper = styled.section`
    height: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: #B33B3B;

    @media (max-width: 926px) and (max-height: 926px) {
        height: 283px;
        width: 100%;
    }
`

export const Title = styled.h2`
    font-family: Maven Pro;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    color: #EFEFEF;
`

export const Carousel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    max-width: 1320px;
`

export const Logo = styled.img<{url: string, onTransition: boolean}>`
    height: 7rem;
    content: ${props => `url(${props.url})`};
    transition: all .4s ease-in-out;

    ${props => props.onTransition && css`opacity: 0;`}
`
