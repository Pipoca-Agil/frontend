import { LegacyRef, forwardRef } from "react";

import * as S from "./styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError: boolean;
}

function Input(
  { label, isError, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Input ref={ref} isError={isError} {...props}></S.Input>
    </>
  );
}

export default forwardRef(Input);
