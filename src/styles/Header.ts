/* eslint-disable @typescript-eslint/naming-convention */
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

export const Header = styled.header`
    display: flex;
    padding: 2rem  1rem;
    align-items: center;
    justify-content: space-between;
    max-width: 1320px;
    width: 100%;
    height: 10rem;
    margin: 0 auto;
    align-items: center;
`;

export const Logo = styled.img`
    width: 9rem;
    height: 100%;
`;

export const Navigation = styled.nav`
    display: flex;
    width: 58%;
    justify-content: center;
    align-items: center;
    gap: 8%;
`;

export const NavLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    font-family: Maven Pro;
    font-weight: 600;   
    font-size: 2rem;  
    color: #455F6B;
    transition: color 0.3s ease-out;
    &:hover {
    color: #B33B3B;
  }
`;

export const AuthButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;  
`;

export const AuthText = styled.p`
    color: #B33B3B;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 0.4rem;
`;

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    width: 17.875rem;
    height: 2.6rem;
    border-radius: 1.25rem;
    background-color: #B33B3B;
    color: #F3F7F8;
    font-family: Inter;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.7rem; 
`;
