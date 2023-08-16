/* eslint-disable @typescript-eslint/naming-convention */
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

export const Header = styled.header`
    display: flex;
    padding: 2rem  1rem;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 10rem;
    margin: 0 auto;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const Logo = styled.img`
    width: 10rem;
    height: 50%;
    /* margin: 1rem; */
`;

export const Navigation = styled.nav`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: center;
    gap: 10%;
`;

export const NavLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    font-family: Inter;
    font-weight: 600;   
     font-size: 2rem;  
    color: #2D2D2D;
`;

export const AuthButtons = styled.div`
    display: flex;
    align-items: center;
    margin: 0 1rem;
    
    gap: 10px;
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
    padding: 1rem 3rem;
 
    text-decoration: none;
    /* margin: 10px 0; */
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Inter';
    cursor: pointer;
    &:last-child {
    /* margin-left: 2.4rem; */
  }
`;
