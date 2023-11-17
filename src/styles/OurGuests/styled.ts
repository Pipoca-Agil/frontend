import styled, { css } from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 7rem 1rem;
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1025px) {
        max-width: 887.55px;
        width: 100%;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        max-width: 400px;
        width: 100%;
    }
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

    @media (max-width: 1025px) {
        height: 285.33px; 
        max-width: 100%;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        height: 128.68px;
        max-width: 100%;
    }
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

    @media (max-width: 1025px) {
        width: 169.06px;
        height: 219.19px;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        width: 76.19px;
        height: 96.78px;
    }
       
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

    @media (max-width: 1025px) {
        width: 441.32px;
        height: 112px;
        font-size: 23.59px;
        line-height: auto;
        margin-left: 2rem;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        width: 198.89px;
        height: 55px;
        font-size: 10.63px;
        line-height: 1rem;
        margin-left: 2rem;
    }
`

export const MainInfo = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 1025px) {
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        justify-content: center;
        align-items: center;
        gap: 0rem;
    }
`

export const EpisodeGeneralInfo = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-top: 7rem;
    margin-left: 0px;
    position: relative;

    @media (max-width: 1025px) {
        height: 112px;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        height: 48px;
    }
`

export const EpisodeLightInformation = styled.div`
    display: flex;
    gap: 17rem;

    @media (max-width: 1025px) {
        gap: 3rem;
    }
    
`

export const BottomInformationDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    position: absolute;
    bottom: 10px;
    left: 80px;

    @media (max-width: 1025px) {
        bottom: -100%;
        left: 10px;
        bottom: -8.5rem;
        gap: 1rem;
        padding: 0.5rem;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        bottom: -100%;
        left: 10px;
        bottom: -4.5rem;
        gap: 0.1rem;
        padding: 0.5rem;
    }
`

export const EpisodeTitle = styled.p`
    color: var(--secondary-cta, #B33B3B);
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;

    @media  (max-width: 926px) and (max-height: 926px) {
        font-size: 5.32px;
    }
`

export const EpisodeInformation = styled.p`
    color: var(--chardon-400, #DD8C8C);
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;

    @media (max-width: 926px) and (max-height: 926px) {
        font-size: 4.43px;
    }
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

    @media (max-width: 1025px) {
        padding-bottom: 10rem;
        width: 109px;
        height: 299px;
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
    }

    @media (max-width: 926px) and (max-height: 926px) {
    padding-bottom: 10rem;
    width: 50px;
    height: 135px;
    position: relative;
    bottom: -2rem;
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
    }
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

    @media (max-width: 1025px) {
        height: 358px;
        width: 107px;
        position: relative;
        bottom: 0.5rem;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        width: 50px;
        height: 135px;
        bottom: 5rem;
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
        }
`;

export const QuotasDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 67.4rem;
    margin-top: 50px;
    position: relative;

    @media (max-width: 1025px) {
        width: 441.32px;
        height: 112px;
        margin-top: 0px;
        bottom: 10rem;
        max-width: 100%;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        width: 198.89px;
        height: 55px;
        margin-top: 0px;
        bottom: 4rem;
        max-width: 100%;
    }
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
