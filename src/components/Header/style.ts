import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  height: 96px;
  align-items: center;
  background-color: #FAEDED;
  padding: 2rem;

  
  @media (min-width: 927px) and (max-width: 1025px) {
    height: 144px;
  } 
`;

export const Button = styled(Link)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    width: 10.5rem;
    height: 3.9rem;
    border-radius: 2rem;
    background-color: #B33B3B;
    color: #F3F7F8;
    font-family: Inter;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.7rem;
    box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: 1025px) {
      left: 80%;
    } 

    @media (max-width: 428px) {
      position: absolute;
      left: 58%;
    }

    @media (min-width: 429px) and (max-width: 926px){
      position: absolute;
      left: 80%;
    }
`;

export const ImageLogo = styled.img`
  width: 54px;
  height: 46px;
  margin-left: 1rem;
`;

export const ImageButton = styled.button`
  background-color: #FAEDED;
  position: relatve;
  margin-left: 1rem;
`; 

export const OptionsWapper = styled.div`
  position: static;
  height: 50%;
  width: 35%;
  padding: 1rem;
  background-color: white;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 926px) and (max-height: 926px) {
    width: 25rem;
    padding: 0;
  }
`;

export const ListItens = styled.p`
  color: #455F6B;
  font-size: 20px;
  font-weight: bold;
  line-height: 2.5em;
  padding-left: 1em;
  

  &:hover {
    color:#B33B3B; /* ou qualquer outra cor desejada no hover */
    /* Adicione outros estilos desejados para o hover aqui */
  }
`;