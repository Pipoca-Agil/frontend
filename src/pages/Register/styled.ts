import styled from "styled-components";
import { Link } from "react-router-dom";
import IbsonTablet from "../../assets/photos/ibson-registe-tablet-2.svg";

export const Container = styled.section`
  display: flex;
  height: 100vh;
  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    padding: 0 2rem;
    text-align: center;
  }
`;

export const SideImageWraper = styled.div`
  width: 50vw;
  height: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    height: 287px;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const SideImage = styled.img<{ secondStepImage: boolean }>`
  position: fixed;
  width: 50vw;
  background-position: bottom bottom;
  object-fit: contain;
  object-position: center; /* Defina a posição para o centro */

  @media (max-width: 1024px) {
    position: static;
    width: 100%;
    min-height: 287px;
    height: 100%;
    object-fit: cover;
    content: ${(props) => (props.secondStepImage ? `url(${IbsonTablet})` : "")};
    object-position: 50% 24%;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const FormWraper = styled.div`
  z-index: 1;
  padding: 4rem 0;
  margin: auto;
  max-width: 410px;
  width: 100%;

  @media (max-width: 760px) {
    margin: auto;
  }
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
`;

export const FormGroup = styled.div`
  margin-top: 2.4rem;
`;

export const ErrorMessage = styled.p`
  color: #b33b3b;
  margin-top: 0.5rem;
  font-size: 1.2rem;
  padding-left: 1rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
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
  /* Button/Button */
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.7rem; /* 135% */
  text-transform: capitalize;
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
