import React, { useState, ChangeEvent } from "react";
import * as S from "./styled";
import Input from "../../../components/Input";
import Circle from "../../../assets/icons/password-requirements-circle.svg";
import ErrorCircle from "../../../assets/icons/password-requirements-error.svg";
import CheckCircle from "../../../assets/icons/password-requirements-check.svg";

enum PasswordIconKeys {
  MaxMinLength = "maxMinLength",
  Lowercase = "lowercase",
  Uppercase = "uppercase",
  Number = "number",
  SpecialCharacters = "specialCharacters",
}

interface PasswordIcons {
  [PasswordIconKeys.MaxMinLength]: string;
  [PasswordIconKeys.Lowercase]: string;
  [PasswordIconKeys.Uppercase]: string;
  [PasswordIconKeys.Number]: string;
  [PasswordIconKeys.SpecialCharacters]: string;
}

interface SecondStepRegisterProps {
  onSubmit: (data: { password: string }) => void;
}

export default function SecondStepRegister({ onSubmit }: any) {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);
  const [icons, setIcons] = useState<PasswordIcons>({
    [PasswordIconKeys.MaxMinLength]: Circle,
    [PasswordIconKeys.Lowercase]: Circle,
    [PasswordIconKeys.Uppercase]: Circle,
    [PasswordIconKeys.Number]: Circle,
    [PasswordIconKeys.SpecialCharacters]: Circle,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPasswordError(null);
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordError(null);
  };

  const validatePassword = (password: string) => {
    const passwordRequirements = [
      {
        iconState: PasswordIconKeys.MaxMinLength,
        test: password.length >= 8 && password.length <= 12,
      },
      {
        iconState: PasswordIconKeys.Lowercase,
        test: /[a-z]/.test(password),
      },
      {
        iconState: PasswordIconKeys.Uppercase,
        test: /[A-Z]/.test(password),
      },
      {
        iconState: PasswordIconKeys.Number,
        test: /\d/.test(password),
      },
      {
        iconState: PasswordIconKeys.SpecialCharacters,
        test: /[^a-zA-Z0-9]+/.test(password),
      },
    ];

    const newIcons: PasswordIcons = { ...icons };
    for (const requirement of passwordRequirements) {
      newIcons[requirement.iconState] = requirement.test
        ? CheckCircle
        : ErrorCircle;
    }

    setIcons(newIcons);
  };

  const handleFormSubmit = () => {
    if (
      passwordRequirements.every((req) => req.icon === CheckCircle) &&
      password === confirmPassword
    ) {
      setPasswordError(null); // Limpa qualquer erro anterior
      onSubmit({ password });
    } else {
      if (!password) {
        setPasswordError("Campo necessário");
      }
      if (!confirmPassword) {
        setConfirmPasswordError("Campo necessário");
      } else if (password !== confirmPassword) {
        setConfirmPasswordError("As senhas não coincidem");
      }
    }
  };

  const passwordRequirements = [
    { icon: icons[PasswordIconKeys.MaxMinLength], text: "8 a 12 caracteres" },
    { icon: icons[PasswordIconKeys.Lowercase], text: "Uma letra minúscula" },
    { icon: icons[PasswordIconKeys.Uppercase], text: "Uma letra maiúscula" },
    { icon: icons[PasswordIconKeys.Number], text: "Pelo menos um número" },
    {
      icon: icons[PasswordIconKeys.SpecialCharacters],
      text: "Caracteres especiais (*/_¨-,.[]^%$#@&)",
    },
  ];

  return (
    <S.FormWrapper>
      <S.Steps>Passo 2/2</S.Steps>
      <S.Title>Crie sua conta</S.Title>
      <S.Subtitle>Vamos configurar sua senha</S.Subtitle>

      <S.FormGroup>
        <Input
          label="Senha"
          value={password}
          onChange={handleChange}
          showPasswordButton={true}
          isError={passwordRequirements.some(
            (req) => req.icon === ErrorCircle || passwordError
          )}
        ></Input>
        {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
      </S.FormGroup>
      <S.FormGroup>
        <Input
          label="Confirmar Senha"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          showPasswordButton={true}
          isError={confirmPasswordError !== null}
        ></Input>
        {confirmPasswordError && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            {confirmPasswordError}
          </S.ErrorMessage>
        )}
      </S.FormGroup>

      <S.ErrorGroup>
        <S.PasswordRequirement>Sua senha precisa ter:</S.PasswordRequirement>
        {passwordRequirements.map((req, index) => (
          <S.Requirements key={index}>
            <S.CircleIcon src={req.icon} /> {req.text}
          </S.Requirements>
        ))}
      </S.ErrorGroup>

      <S.ButtonsWrapper>
        <S.Button onClick={handleFormSubmit}>Continuar</S.Button>
        <S.HaveLogin>
          Já tem uma conta? <S.LoginLink to="/login">Login</S.LoginLink>
        </S.HaveLogin>
      </S.ButtonsWrapper>
    </S.FormWrapper>
  );
}
