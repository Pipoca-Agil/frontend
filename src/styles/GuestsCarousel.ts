/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';
export const GuestsCarouselTrack = styled.div`
display: flex;
justify-content: center;
margin: 0 auto;
height: 40vh;
width: 90vw;
gap: 5rem;
`;
export const ArrowButton = styled.button`
border: none;
cursor: pointer;
background: #FFFCF3;
align-self: center;
img {
  width: 3rem;
  height: 3rem;
}
`;
export const Indicator = styled.button`
  background-color: #B33B3B;
  height:1rem;
  width: 1rem;
  border-radius: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  &.indicator-inactive {
  background-color: grey;
}
`;
export const Indicators = styled.span`
  display: flex;
  margin: 0 50%;
  gap: 1rem;
  padding: 1rem 0;
`;
export const EpisodyWrapper = styled.div`
display: flex; 
align-items: center;
width: 100%;
justify-content: space-around;
line-height: normal;
font-style: normal;
gap: 3rem;
&.slide-hidden {
  display: none;
}
`;
export const PhotoEpisodyGuest = styled.img`
height: 100%;
width: 20%;
`;
export const InfoEpisodyWrapper = styled.div`
width: 80%;
height: 100%;
align-items: center;
display: flex;
flex-direction: column;
justify-content: space-evenly;
gap: 5rem;

`;
export const EpisodyPhrase = styled.div`
display: flex;
align-self: flex-end;
width: 90%;
height: 40%;
img {
  position: relative;
  width: 15%;
  height: 80%;
  z-index: 1;
  &.left {
  top: 0;
  align-self: flex-start;
  transform: rotate(6.617deg);
}
&.right {
  transform: rotate(11.32deg);
  float: right;
  top: 20%;
}
}
h1 {
  max-height: 80%;
  width: 70%;
  margin: 0;
  color: #2D2D2D;
  text-align: center;
  align-self: center;
  font-family: Montserrat Alternates;
  font-size: 2rem;
  font-weight: 400;
}
`;
export const EpisodyDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-self: flex-start;
height: 30%;
width: 60%;
gap: 1rem;
max-height: 5rem;
font-family: Inter;
h1 {
  height: 30%;
  width: 100%;
  margin: 0;
  color: #B33B3B;
  font-size: large;
  font-weight: bold;
}
`;

export const Episody = styled.div`
display: flex;
justify-content: space-between;
color: #E49D9D;
font-weight: 400;
font-size: 1rem;
`;
export const CarouselSectionName = styled.h1`
color: #B33B3B;
font-family: Cherry Bomb One;
font-size: 2rem;
padding: 2rem;
font-weight: 400;
text-align: center;
text-transform: uppercase;
`;
