import { InputHTMLAttributes } from "react";

import * as S from "./style";

import { Eye } from "@phosphor-icons/react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
  isPassword?: boolean;
  size?: number;
}
export function Input({
  size,
  type,
  placeholder,
  isPassword = false,
  name
}: InputProps) {
  return (
    <>
      <S.Container>
        <S.Input type={type} placeholder={placeholder} name={name} />
        {isPassword && (
          <Eye size={size} className="absolute right-3 cursor-pointer " />
        )}
      </S.Container>
    </>
  );
}
