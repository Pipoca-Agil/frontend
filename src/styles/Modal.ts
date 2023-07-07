/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const ModalSection = styled.section`
position: fixed;
top: 50%; 
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 50vh;
gap: 02rem;
border-radius: 0.5rem;
padding: 1rem;
box-shadow: 0 2px 8px #333;
color: #000;
text-align: center;
font-family: Inter;
font-style: normal;
line-height: 1rem;
width: 30%;
`;
export const ModalWrapper = styled.div`
width: 100vw;
background-color: rgba(0, 0, 0, 0.4);
position: relative;
display: grid;
place-items: flex-end;
height: calc(100vh - 8rem);
`;
export const ModalIcon = styled.img`
width: 5rem;
height: 5rem;
`;
export const ModalButton = styled.button`
border: none;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 0.5rem;
width: 25%;
border-radius: 1.5rem;
color: #DCDCDC;
font-size: 1rem;
font-weight: 600;
cursor: pointer;
`;

