/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const BalloonsWrapper = styled.div`
    display: flex;
    position: relative;
    width: 50rem;

    @media(max-width: 1025px) {
      margin-top: 5rem;
    }
    
    @media (max-width: 926px) and (max-height: 926px) {
       display: none;
      }

`;

export const LeftBalloon = styled.img`
    position: absolute;
    width: 15rem;

    @media (max-width: 1025px) {
      position: relative;
      left: 60%;
      padding: 1.5rem;
    }
    
    @media (max-width: 926px) and (max-height: 926px) {
        position: relative;
        left: 55%;
        bottom: 105px;
        width: 13.96rem;
        padding: 1.5rem;
      }
`;

export const CenterBalloon = styled.img`
    position: absolute;
    width: 15rem;
    height: 100%;
    transform: translateY(50%);
    left: 30%;
    bottom: 30%;

    @media (max-width: 1025px) {
      left: 30%;
      bottom: 10%;
      padding: 1.5rem;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        position: relative;
        width: 17.2rem;
        padding: 1.5rem;
        left: -30%;
      }
  
`;

export const RightBalloon = styled.img`
    position: absolute;
    width: 15rem;
    transform: translateY(50%);
    left: 70%;
    bottom: 70%;

    @media (max-width: 1025px) {
      left: 30%;
      transform: translateY(10%);
      padding: 1.5rem;
    }

    @media (max-width: 926px) and (max-height: 926px) {
        display: none;
      }
   
`;