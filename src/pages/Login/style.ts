import styled, { createGlobalStyle } from "styled-components";
import TabletImage from "./Imgs/TabletImage.png";
import MobileImage from "./Imgs/Vector.png"
import EyeImage from "./Imgs/ph_eye-light.png";

export const GlobalStyles = createGlobalStyle`
  * {
    background-color: white;
  }

  body {
    overflow-x: hidden;
  }
`;

export const Body = styled.body`
display: flex;
height: 100vh;
justify-content: space-between;
@media (max-width: 1024px) {
  flex-direction: column;
  align-items: space-between;
  justify-content: center;

}

@media (max-width: 926px) and (max-height: 926px) {
  text-align: center;
}
`

export const StyledLoginPage = styled.main`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    order: 1;
  }

  @media (max-width: 926px) and (max-height: 926px) {
    padding: 0 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  
`

export const LogoImage = styled.div`
  position: relative;
  width: 134px;
  height: 119.88px;
  padding: 10px;
  transform: scale(0.8);

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Title = styled.h4`
  color: #b33b3b;
  font-family: Maven Pro;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.52rem; /* 110% */
  margin-bottom: 1.2rem;

  @media (max-width: 926px) and (max-height: 926px) {
    margin-bottom: 50px;
  }

`

export const SubTitle = styled.p`
color: var(--Letter, #455f6b);
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: 1.75rem; /* 140% */

@media (max-width: 926px) and (max-height: 926px) {
  margin-bottom: 50px;
}
`

export const LableStyle = styled.label`
color: var(--Letter, #455f6b);
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: 2.8rem;

@media (max-width: 926px) and (max-height: 926px) {
  display: none;
}
`

export const FormStyle = styled.section`
z-index: 1;
padding: 4rem 0;
margin: auto;
max-width: 410px;
width: 100%;

@media (max-width: 926px) and (max-height: 926px) {
  height: 50%;
  top: 15%;
  position: absolute;
}
`

export const InputComponent = styled.input`
width: 400px;
display: flex;
height: 40px;
top: 434px;
left: 141px;
border-radius: 30px;
border: 2px solid #BDBDBD;
justify-content: center;
align-items: center;
flex-shrink: 0;
padding: 0.5rem 1.5rem;
background-color: transparent;

@media (max-width: 926px) and (max-height: 926px) {
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 80%;
  margin: auto;
  
}
`

export const ImageWrapper = styled.div`
width: 50vw;
height: 100%;
right: 0px;

@media (max-width: 1024px) {
  width: 100%;
  height: 287px;
  margin-bottom: 20px;
}
`

export const Image = styled.img`
position: fixed;
width: 50vw;
object-fit: cover;
right: 0px;
bottom: 0px;

@media (max-width: 1024px)  {
  content: url(${TabletImage});
  position: static;
  width: 100%;
  min-height: 287px;
  height: 100%;
  object-fit: cover;
  order: 0;
}

@media (max-width: 926px) and (max-height: 926px) {
    content: url(${MobileImage});
    position: absolute;
    object-fit: contain;
    width: 80%;
    height: 100%;
    top: 0px;
    right: 0px;
    object-position: 50% 0%;
  }

`
export const FormGroup = styled.div`
  margin-top: 2.4rem;
`;

export const PasswordSpan = styled.span`
  font-family: "Inter";
  font-size: 14px;
  line-height: 2.7rem;
  font-weight: 400;
  color:  #B33B3B;

  @media (max-width: 926px) and (max-height: 926px) {
    position: relative;
    left: 25%;
    padding-top: 15px;
  }
`

export const Button = styled.button`
cursor: pointer;
width: 31.2rem;
height: 4rem;
border-radius: 2rem;
background: var(--white-300, #bdbdbd);

box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.25);

color: var(--Letter, #455f6b);
text-align: center;
/* Button/Button */
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: 2.7rem; /* 135% */
text-transform: capitalize;

&:hover {
  background-color: #b33b3b;
  cursor: pointer;
  color: #fff;
}

`;

export const CheckBoxWapper = styled.div`
  display: flex;
  align-items:center;
`

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 16px;
  height: 16px;
  top: 44px;
`
export const SpanText = styled.span`
color: var(--Letter, #455f6b);
position: relative;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.75rem; /* 140% */
top: 45px;
left: 15px
`

export const LinkDetalhes = styled.p`
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
color: #B33B3B;
position: relative;
top: 45px;
left: 25px;
text-decoration: subline;
`

export const CadastreseDiv = styled.div`
  position: relative;
  top: 58px;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    height: 49px;
    width: 372px;
  }
`

export const CadastreseText = styled.p`
color: var(--white-950, #455F6B);
/* Paragraph/P2 */
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: 2.8rem; /* 140% */
margin-top: 2rem;
`

export const CadastreseText2 = styled.p`
font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
color: #455F6B;
`

export const PassowrdWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const HiddenLabel = styled.label`
  display: none; /* Isso oculta a etiqueta */
`;

export const HiddenChackboxWapper = styled.div `
  display: none;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
`;

export const ErrorMessage = styled.span`
color: #b33b3b;
position: relative;
top: 1rem;
font-size: 1.2rem;
text-align: center;
font-weight: bold;
`;

export const EyeIcon = styled.image`
content: url(${EyeImage});
position: absolute;
margin-left: 350px;
cursor: pointer;

@media (max-width: 926px) and (max-height: 926px) {
  margin-left: 270px;
}
`;