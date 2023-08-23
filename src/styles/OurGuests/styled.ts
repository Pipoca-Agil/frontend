import styled, { css } from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10.5rem 7.6rem 16rem 6.9rem;
    gap: 2rem;
`;

export const Title = styled.h2`
    color: #B33B3B;
    font-family: Maven Pro;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 6rem; 
    align-self: center;
`;

export const Carousel = styled.div`
    display: flex;
    width: 180.6rem;
    justify-content: space-between;
    align-items: center;
`;

export const GuestImage = styled.img<{url: string, isActive: boolean}>`
    content: ${props => `url(${props.url})`};

    transition: all .4s ease-in-out;

    ${props => props.isActive? 
    css`
        opacity: 100;
    ` :
    css`
        opacity: 0;
    ` }
`;

export const LeftArrow = styled.button`
    border: none;
    background-color: transparent;
    background-image: url('/carousel/arrow-right.svg');
    transform: rotate(180deg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    width: 10rem;
    height: 10rem;
`;

export const RightArrow = styled.button`
    border: none;
    background-color: transparent;
    background-image: url('/carousel/arrow-right.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    width: 10rem;
    height: 10rem;
`;

export const EffectPhrase = styled.h4<{isActive: boolean}>`
    color: var(--letter, #455F6B);
    text-align: center;
    font-family: Maven Pro;
    font-size: 5.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 6.16rem;
    position: absolute;
    margin-left: 10rem;
    width: 90rem;
    z-index: 2;

    transition: all .4s ease-in-out;

    ${props => props.isActive? 
    css`
        opacity: 100;
    ` :
    css`
        opacity: 0;
    ` }
`

export const MainInfo = styled.div`
    display: flex;
    gap: 3rem;
`

export const EpisodeGeneralInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 14rem;
`

export const EpisodeLightInformation = styled.div`
    display: flex;
    gap: 18.7rem;
`

export const BottomInformationDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding-top: 9rem;
    padding-left: 4rem;
`

export const EpisodeTitle = styled.p`
    color: var(--secondary-cta, #B33B3B);
    font-family: Inter;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 800;
    width: 90rem;
`

export const EpisodeInformation = styled.p`
    color: var(--chardon-400, #DD8C8C);
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.8rem;
`

export const LeftQuota = styled.img<{isActive: boolean}>`
    padding-bottom: 6rem;
    content: url('/carousel/quota.svg');
    transition: all .4s ease-in-out;

    ${props => props.isActive? 
    css`
        transform: rotate(0deg);
    `
    :
    css`
        transform: rotate(360deg);
    `}
`;

export const RightQuota = styled.img<{isActive: boolean}>`
    padding-bottom: 7rem;
    content: url('/carousel/quota.svg');
    transition: all .4s ease-in-out;

    ${props => props.isActive? 
    css`
        transform: rotate(180deg);
    `
    :
    css`
        transform: rotate(-270deg);
    `}
`;

export const QuotasDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 94.4rem;
`

export const SelectionButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 1rem;
`;

export const SelectionButton = styled.button<{isActive: boolean}>`
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.isActive? 'var(--secondary-cta, #B33B3B);' : 'var(--chardon-200, #F4D4D4);;'};
    cursor: pointer;

    :hover {
        background-color: var(--secondary-cta, #B33B3B)
    }
`;
