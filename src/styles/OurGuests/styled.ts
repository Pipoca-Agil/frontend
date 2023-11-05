import styled, { css } from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 7rem 1rem;
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
`;

export const Title = styled.h2`
    color: #B33B3B;
    font-family: Maven Pro;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2; 
    align-self: center;
    margin-bottom: 4rem;
`;

export const Carousel = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-self: center;
`;

export const GuestImage = styled.img<{url: string, isActive: boolean}>`
    content: ${props => `url(${props.url})`};
    width: 344px;
    height: 446px;
    transition: all .4s ease-in-out;
    align-self: baseline;
    /* border-radius: 50%; */
    object-fit: cover;
    /* box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.36); */
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
    width: 3.25rem;
    height: 6.25rem;
`;

export const RightArrow = styled.button`
    border: none;
    background-color: transparent;
    background-image: url('/carousel/arrow-right.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    width: 3.25rem;
    height: 6.25rem;
`;

export const EffectPhrase = styled.h4<{isActive: boolean}>`
    color: var(--letter, #455F6B);
    text-align: center;
    font-family: Maven Pro;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.85rem;
    position: absolute;
    margin-left: 6rem;
    width: 63.5rem;
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
    gap: 1rem;
`

export const EpisodeGeneralInfo = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-top: 7rem;
    margin-left: 0px;
    position: relative;
`

export const EpisodeLightInformation = styled.div`
    display: flex;
    gap: 17rem;
    
`

export const BottomInformationDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    position: absolute;
    bottom: 10px;
    left: 80px;
`

export const EpisodeTitle = styled.p`
    color: var(--secondary-cta, #B33B3B);
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
`

export const EpisodeInformation = styled.p`
    color: var(--chardon-400, #DD8C8C);
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
`

export const LeftQuota = styled.img<{isActive: boolean}>`
    padding-bottom: 10rem;
    width: 20.5rem;
    height: 20.5rem;
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
    padding-bottom: 10rem;
    width: 20.5rem;
    height: 20.5rem;
    content: url('/carousel/quota.svg');
    transition: all .4s ease-in-out;

    position: absolute;
    bottom: 0;
    right: -30px;
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
    width: 67.4rem;
    margin-top: 50px;
    position: relative;
`

export const SelectionButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 1rem;
    margin-top: 1rem;
`;

export const SelectionButton = styled.button<{isActive: boolean}>`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.isActive? 'var(--secondary-cta, #B33B3B);' : 'var(--chardon-200, #F4D4D4);;'};
    cursor: pointer;

    :hover {
        background-color: var(--secondary-cta, #B33B3B)
    }
`;
