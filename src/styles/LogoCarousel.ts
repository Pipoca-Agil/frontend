/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Logos = styled.section`
overflow: hidden;
white-space: nowrap;
padding: 2rem;
`;

export const LogosSlide = styled.div`
display: inline-block;
animation: 30s slide infinite linear;
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
`;
export const LogoImg = styled.img`
height: 6rem;
margin: 0 40px;
`;

export const CarouselWrapper = styled.div`
display: flex;
flex-direction: column;
background-color: #B33B3B;
justify-content: space-around;
`;
export const CarouselTitle = styled.h1`
color: #EFEFEF;
font-family: Inter;
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: center;
`;
