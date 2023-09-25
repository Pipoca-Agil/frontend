import styled from "styled-components";

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
height: 40px;
top: 434px;
left: 141px;
border-radius: 30px;
border: 2px solid #BDBDBD;
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