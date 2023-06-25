import { InputHTMLAttributes } from "react";

import * as S from "./style";

import { Eye } from "@phosphor-icons/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
}
export function Input({ isPassword = false, ...props }: InputProps) {
  return (
    <>
      <S.Container>
        <S.Input {...props} />
        {isPassword && (
          <Eye size={24} className="absolute right-3 cursor-pointer " />
        )}
      </S.Container>
    </>
  );
}
