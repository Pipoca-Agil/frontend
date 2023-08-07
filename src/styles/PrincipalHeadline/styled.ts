/* eslint-disable @typescript-eslint/naming-convention */
import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-block: 6rem;
    font-family: 'Inter';
    color: #2D2D2D;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    font-family: 'Cherry Bomb One', cursive;
    font-size: 8rem;
    font-weight: 400;
    font-style: normal;
    color: #B33B3B;
    line-height: normal;
    margin-bottom: 1.2rem;
`;

export const SubTitle = styled.h2`
    font-size: 4.6rem;
    font-style: normal;
    font-weight: 600;
    color: #2D2D2D;
    line-height: normal;
    margin-bottom: 4.6rem;
`;

export const ButtonDiv = styled.div`
    display: flex;
    gap: 2.4rem;
    flex-direction: column;
    width: 29.2rem;
    margin: 0 auto;
`;

type ButtonProps = {
	buttonType: string;
};

export const Button = styled.button<ButtonProps>`
    ${props =>
		props.buttonType === 'type1'
    && css`
      background-color: transparent;
      color: #B33B3B;
      border: 2px solid #B33B3B;
    `};
    ${props =>
		props.buttonType === 'type2'
    && css`
      background-color: #B33B3B;
      color: #FBFBFB;
      border: 2px solid #B33B3B;
    `};
    width: 100%;
    border-radius: 2.4rem;
    padding: 1rem 3.2rem;
    text-decoration: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    font-weight: 500;
    font-family: 'Inter';
    cursor: pointer;
`;
