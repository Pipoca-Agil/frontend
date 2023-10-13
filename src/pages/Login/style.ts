import styled, { createGlobalStyle } from "styled-components";
import TabletImage from "./Imgs/TabletImage.png";
import MobileImage from "./Imgs/Vector.png"

export const GlobalStyles = createGlobalStyle`
  * {
    background-color: white;
  }

  body {
    overflow-x: hidden;
    max-height: 100%;
    max-width: 100%;
  }

  /* Estilize a barra de rolagem no Chrome e navegadores baseados em WebKit */
  ::-webkit-scrollbar {
    display: none;
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

@media (max-width: 760px) {
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

  @media (max-width: 760px) {
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

  @media (max-width: 760px) {
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

@media (max-width: 760px) {
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

@media (max-width: 768px) {
  display: none;
}
`

export const FormStyle = styled.section`
z-index: 1;
padding: 4rem 0;
margin: auto;
max-width: 410px;
width: 100%;

@media (max-width: 760px) {
  margin: auto;
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

@media (max-width: 768px) {
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: transparent;
  
}
`

export const ImageWrapper = styled.div`
width: 50vw;
height: 100%;
right: 0px;
top: 0px;

@media (max-width: 1024px) {
  width: 100%;
  height: 287px;
}

`

export const Image = styled.img`
position: fixed;
width: 50vw;
object-fit: cover;
right: 0px;
bottom: 0px;

@media (min-width: 530px) and (max-width: 1024px)  {
  content: url(${TabletImage});
  position: static;
  width: 100%;
  min-height: 287px;
  height: 100%;
  object-fit: cover;
  order: 0;
}

  @media (max-width: 530px) {
    content: url(${MobileImage});
    position: fixed;
    width: 100vw;
    height: 80vh;
    max-height: 100%;
    max-width: 100%;
    top: 0px;
    right: 0px;
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

  @media (max-width: 768px) {
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
  display: flex;
  flex-direction: column;
  position: relative;
  top: 68px;
  align-items: center;
  justify-content: center;

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
margin-top: 4rem;
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