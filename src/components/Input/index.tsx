import React, { LegacyRef, forwardRef, useState } from "react";
import * as S from "./styled";
import Eye from "../../assets/icons/eye.svg";
import BlockEye from "../../assets/icons/block-eye.svg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError: boolean;
  showPasswordButton?: boolean; // Adicione a prop showPasswordButton
}

function Input(
  { label, isError, showPasswordButton = false, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  console.log(showPasswordButton);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          ref={ref}
          isError={isError}
          type={passwordVisible ? "text" : "password"}
          {...props}
        ></S.Input>
        {showPasswordButton && (
          <S.EyeIcon
            onClick={togglePasswordVisibility}
            src={passwordVisible ? BlockEye : Eye}
            alt="Mostrar Senha"
          />
        )}
      </S.InputWrapper>
    </>
  );
}

export default forwardRef(Input);
