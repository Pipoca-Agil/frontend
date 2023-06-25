import React, { InputHTMLAttributes } from "react";

import * as S from "./style";

import { Eye } from "@phosphor-icons/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isPassword?: boolean;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, isPassword = false, ...props }, ref) => (
    <>
      <S.Container>
        <S.Input ref={ref} {...props} />
        {isPassword && (
          <Eye size={24} className="absolute right-3 cursor-pointer " />
        )}
        {errorMessage && <S.P>{errorMessage}</S.P>}
      </S.Container>
    </>
  )
);

Input.displayName = "Input";
