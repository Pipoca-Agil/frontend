/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const ListenOnPlatforms = styled.div`
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    
    color: #B33B3B;
    font-family: Maven Pro;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.2rem; 

    @media (max-width: 926px) and (max-height: 926px) {
        display: none;
      }

      @media (max-width: 1025px) {
        display: none;
       }
`;

export const Platform = styled.a`
    text-decoration: none;
    display: flex;
    margin-top: 1.5rem;
    cursor: unset;
`;

export const PlatformIcon = styled.img`
    width: 3.1rem;
    height: 3.1rem;
    margin-right: 1rem;
    object-fit: contain;
    cursor: pointer;

    @media (max-width: 926px) and (max-height: 926px) {
        width: 50px;
        height: 50px;
      }

      
      @media (min-width: 927px) and (max-width: 1025px) {
        width: 62px;
        height: 62px;
       }
`;

export const PlatformName = styled.p`
    display: flex;
    cursor: pointer;
    line-height: 1.6875rem;
    color: #525252;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    align-items: center;

    @media (max-width: 926px) and (max-height: 926px) {
        display: none;
      }

      
      @media (max-width: 1025px) {
        display: none;
       }
`;

export const PlataformLogosDiv = styled.div`
@media (max-width: 926px) and (max-height: 926px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }


  @media (max-width: 1025px){
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;