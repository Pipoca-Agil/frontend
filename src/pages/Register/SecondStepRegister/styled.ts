import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormWrapper = styled.div`
  margin: auto;
`;

export const Steps = styled.p`
  color: var(--white-950, #292929);
  /* Button/Button */
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.7rem; /* 135% */
  text-transform: capitalize;
`;

export const Title = styled.h1`
  color: var(--Secondary---CTA, #b33b3b);
  /* Heading/H4 */
  font-family: Maven Pro;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.52rem; /* 110% */
  margin-bottom: 1.2rem;
`;

export const Subtitle = styled.h2`
  color: var(--Letter, #455f6b);
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 140% */
  @media (max-width: 600px) {
    margin-bottom: 3.9rem;
  }
`;

export const FormGroup = styled.div`
  margin-top: 2.4rem;
`;

export const Label = styled.label`
  color: var(--Letter, #455f6b);
  /* Paragraph/P2 */
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 4rem;
`;

export const Input = styled.input<{ isError: boolean }>`
  padding: 0.5rem 1.5rem;
  display: flex;
  width: 100%;
  height: 4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 3rem;
  border: 2px solid ${(props) => (props.isError ? "#b33b3b" : "#bdbdbd")}; /* Estilo condicional da borda */

  font-family: Inter;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  &::first-child {
    margin-top: 0;
  }
`;

export const ErrorGroup = styled.div`
  text-align: left;
`;

export const PasswordRequirement = styled.p`
  margin-top: 2.4rem;
  margin-bottom: 1.4rem;
  color: var(--Letter, #455f6b);
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.8rem;

  @media (max-width: 600px) {
    margin-top: 3.1rem;
  }
`;

export const CircleIcon = styled.img``;

export const RequirementsWrapper = styled.div`
  position: relative;
  display: flex; /* Use flexbox para alinhar horizontalmente */
  align-items: center;
`;

export const CircleIconRequirement = styled.img`
  @media (max-width: 600px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Requirements = styled.p`
  display: flex; /* Use flexbox para alinhar horizontalmente */
  align-items: center;
  color: var(--Letter, #455f6b);
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    padding-left: 3.4rem;
    margin-top: 0.4rem;
  }
`;

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  color: #b33b3b;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  @media (max-width: 600px) {
    margin-top: 2.4rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 31.2rem;
  height: 4rem;
  border-radius: 2rem;
  background: var(--white-300, #bdbdbd);
  box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.25);
  color: var(--Letter, #455f6b);
  text-align: center;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.7rem; /* 135% */
  text-transform: capitalize;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b33b3b;
    color: #f3f7f8;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HaveLogin = styled.p`
  color: var(--white-950, #292929);
  /* Paragraph/P2 */
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.8rem; /* 140% */
  margin-top: 4rem;
`;

export const LoginLink = styled(Link)`
  color: var(--Secondary---CTA, #b33b3b);
  /* Link/Hyperlink */
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.7rem;
`;
