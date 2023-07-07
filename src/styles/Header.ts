/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const ActionWrapper = styled.div`
 display: flex;
 padding: 12px, 18px, 12px, 18px;
 align-items: center;
 justify-content: space-between;
 margin: 0 10rem 0 10rem;
 height: 100%;
`;
export const HeaderButton = styled.button`
border-radius: 1.5rem;
border: none;
width: 8.375rem;
background: #FFBC11;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 0.5rem 1.125rem;
gap: 0.625rem;
color: #181818;
font-size: 0.875rem;
font-family: Inter;
font-style: normal;
font-weight: 700;
line-height: 1rem;
cursor: pointer;
&:hover {
  background-color: #f0a700;
}
&.homeLoginPage {
  background-color: #181818;
  color:#FFBC11;
  &:hover {
    background-color: #252525;
  }
}
`;
export const LoginPageNavigate = styled.div`
display: flex;
gap: 2rem;
`;
