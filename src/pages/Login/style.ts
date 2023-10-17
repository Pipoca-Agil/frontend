import styled, { createGlobalStyle } from "styled-components";
import TabletImage from "./Imgs/TabletImage.png";
import MobileImage from "./Imgs/Vector.png"
import EyeImage from "./Imgs/ph_eye-light.png";
import { Link } from "react-router-dom";

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

}

@media (max-width: 926px) and (max-height: 926px) {
  text-align: center;
}
`

export const StyledLoginPage = styled.main`
/*   display: flex; */
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
      display: flex;
    padding: 0 2rem;
    text-align: center;
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
  margin: auto;
  width: 85%;
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
padding-top: 24%;

@media (max-width: 1024px) {
  padding-top: 8%;

}

@media (max-width: 926px) and (max-height: 926px) {
  height: 50%;
  top: 15%;
  position: absolute;
}
`

export const InputComponent = styled.input<{isError : boolean}>`
width: 400px;
height: 40px;
top: 434px;
left: 141px;
border-radius: 30px;
border: 2px solid ${(props) => (props.isError ? "#b33b3b" : "#bdbdbd")};
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
  height: 100%;
}
`

export const Image = styled.img`
position: absolute;
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
  position: relative;
  top: 15px;

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
  margin-bottom: 4rem;
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
color: var(--white-950, #455F6B);
/* Paragraph/P2 */
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: 2.8rem; /* 140% */
margin-top: 4rem;
margin-bottom: 4rem;
text-align: center;
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
display: flex;
align-items: center;
color: #b33b3b;
font-family: Inter;
font-size: 1.3rem;
font-style: normal;
font-weight: 400;
margin-top: 0.5rem;
text-align: left;
width: 80%;
gap: 0.5rem;

@media (max-width: 926px) and (max-height: 926px){
  margin: auto;
}

`;

export const EyeIcon = styled.image`
content: url(${EyeImage});
position: absolute;
margin-left: 350px;
cursor: pointer;

@media (max-width: 926px) and (max-height: 926px) {
  margin-left: 65%;
}
`;

export const LinkLogin = styled(Link)`
color: var(--Secondary---CTA, #b33b3b);
/* Link/Hyperlink */
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: 2.7rem;
`;