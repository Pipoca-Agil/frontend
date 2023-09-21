import styled from "styled-components";

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
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ButtonIcon = styled.button`
  cursor: pointer;
`;

export const EyeIcon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 9%;
  top: 20%;
`;