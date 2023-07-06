/* eslint-disable @typescript-eslint/naming-convention */
import {styled} from 'styled-components';

export const LoginWrapper = styled.div`
display: grid;
grid-template-rows:  8rem 5rem 1fr 5rem;
grid-template-columns: 0.5fr 1.5fr 0.5fr 1fr 5rem;
grid-template-areas:
'header header header header header'
'. . . . .'
'. loginForm . photos .'
'. . . . .'
;
height: 100vh;
`;
export const LoginFormContainer = styled.form`
grid-area: loginForm;
border-radius: 0.5rem;
border: 2px solid #DCDCDC;
padding: 2rem;
height: 80%;
align-self: center;
display: flex;
flex-direction: column;
gap: 5rem;
`;
export const PhotosContainer = styled.div`
grid-area: photos;
`;
export const LoginImg = styled.img`
border-radius: 40rem;
width: 40%;
position: relative;
&.secondPhoto {
  top: 25%;
  left:15%;
}
&.thirdPhoto {
top: 10%;
}
`;
export const BtnNewAcc = styled.button`
border: none;
padding: none;
background: #FFFCF3;
cursor: pointer;
color: #D09600;
text-decoration: underline;
`;
