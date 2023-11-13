import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  height: 96px;
  align-items: center;
  background-color: #FAEDED
`;

export const Button = styled(Link)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    width: 11.6rem;
    height: 3.9rem;
    border-radius: 2rem;
    background-color: #B33B3B;
    color: #F3F7F8;
    font-family: Inter;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.7rem; 
    left: 65%;
    box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.25);
`;

export const ImageLogo = styled.img`
  width: 54px;
  height: 46px;
  margin-left: 1rem;
`;

export const ImageButton = styled.button`
  background-color: #FAEDED
  position: absolute;
  margin-left: 1rem;
`; 

export const OptionsWapper = styled.div`
  position: static;
  height: 50%;
  width: 50%;
  background-color: white;
`;

export const ListItens = styled.p`
  color: #455F6B;
  font-size: 30px;
  font-weight: bold;
  line-height: 2.5em;
  padding-left: 1em;
  
`;