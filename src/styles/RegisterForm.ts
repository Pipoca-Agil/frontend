import styled from 'styled-components';
/* eslint-disable @typescript-eslint/naming-convention */

export const FormWrapper = styled.form`
  display:flex;
  flex-direction: column;
  font-size: 1rem;
  font-family: Inter;
  font-style: normal;
  font-size: 0.875rem;
  gap: 1rem;
`;
export const NameLastName = styled.div`
display: flex;
gap: 0.5rem;
align-items: center;
`;
export const PasswordField = styled.div`
position: relative;
`;
export const EyeIcon = styled.img`
position: absolute;
left: 94%;
top:0.5rem;
width: 1.2rem;
color: #141414;
cursor: pointer;
&.loginInput {
  left: 75%;
}
`;
export const InputField = styled.input`
border-radius: 1.5rem;
border: 2px solid #DCDCDC;
font-weight: 400;
padding: 0.5rem;
outline: none;
width: 100%;
background-color: #FFFCF3;

&.regularInputSize {
  width: 96.5%;
  }
  &.loginInput{
    margin-left: 10%;
    width: 70%;
  }
  &::placeholder {
    color: #141414;
  }
`;
export const PasswordInstructions = styled.p`
color: #DB3838;
font-style: italic;
font-weight: 200;
font-size: 0.875rem;
`;
export const PasswordFailed = styled.div`
color: #37595B;
font-style: italic;
font-weight: 200;
`;

export const RequirementsList = styled.li`
list-style: none;
&.requirement-failed {
    color: #DB3838;
  }
`;
export const CheckboxTerms = styled.label`
display: flex;
align-content: center;
gap: 5px;
color: #141414;
font-weight: 200;
`;
export const CheckBox = styled.input`
   display: none;
`;
export const CheckedIcon = styled.img`
  cursor: pointer;
`;
export const TermsColor = styled.span`
cursor: pointer;
color: #D09600;
text-decoration: underline;
`;
export const SubmitBtn = styled.button`
border-radius: 1.5rem;
padding: 0.5rem;
background: #141414;
width: 10rem;
align-self: center;
cursor: pointer;
text-align: center;
color: #DCDCDC;
font-size: 1rem;
font-weight: 600;
font-style: normal;
&:hover {
  background-color: #252525;
}
`;
