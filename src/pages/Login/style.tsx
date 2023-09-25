import styled from "styled-components";

export const Body = styled.body`
  background-color: white;
  
`

export const StyledLoginPage = styled.main`
  display: flex;
  height: 100vh;
`

export const LogoImage = styled.div`
  position: relative;
  width: 134px;
  height: 119.88px;
  top: 24px;
  left: 40px;
`

export const Title = styled.h4`
  color: #b33b3b;
  font-family: Maven Pro;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.52rem; /* 110% */
  margin-bottom: 1.2rem;
`

export const SubTitle = styled.p`
color: var(--Letter, #455f6b);
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: 1.75rem; /* 140% */
`

export const LableStyle = styled.label`
color: var(--Letter, #455f6b);
font-family: Inter;
font-size: 2rem;
font-style: normal;
font-weight: 400;
line-height: 2.8rem;
`

export const FormStyle = styled.section`
  padding: 4rem 0;
  margin: auto;
  max-width: 410px;
  width: 100%;

  .formContainer {
    display: flex;
    flex-direction: column;
    gap-between: 10px
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
`

export const ImageWrapper = styled.div`
  width: 50vw;
  height: 100%;
`

export const Image = styled.img`
  width: 50vw;
  background-position: bottom bottom;
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
`;