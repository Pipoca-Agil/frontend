/* eslint-disable @typescript-eslint/naming-convention */
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

export const Header = styled.header`
    display: flex;
    padding: 2rem  1rem;
    align-items: center;
    justify-content: space-between;
    gap: 13.5rem;
    max-width: 155.5rem;
    margin: 0 auto;
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const Logo = styled.img`
    width: 13.4rem;
    height: 12rem;
`;

export const Navigation = styled.nav`
    display: flex;
    width: 92.4rem;
    padding: 1.8rem 1.2rem;
    justify-content: center;
    align-items: center;
    gap: 9.8rem;
`;

export const NavLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    font-family: Inter;
    font-size: 2.8rem;
    font-weight: 600;     
    color: #2D2D2D;
`;

export const AuthButtons = styled.div`
    display: flex;
`;

type ButtonProps = {
	buttonType: string;
};

export const Button = styled(Link)<ButtonProps>`
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
      border: none;
    `};
    border-radius: 2.4rem;
    padding: 1rem 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 2.2rem;
    font-weight: 500;
    font-family: 'Inter';
    cursor: pointer;
    &:last-child {
    margin-left: 2.4rem;
  }
`;
