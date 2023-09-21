import React from "react";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import Input from "../../../components/Input";
import ErrorCircle from "../../../assets/icons/password-requirements-error.svg";

type FormFirstStepData = {
  name: string;
  surname: string;
  email: string;
};

export default function FirstStepRegister({ onSubmit }: any) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFirstStepData>();

  const handleFormSubmit = (data: FormFirstStepData) => {
    onSubmit(data); // Chama a função onSubmit do componente pai com os dados do formulário
  };

  return (
    <S.FormWraper>
      <S.Steps>Passo 1/2</S.Steps>
      <S.Title>Crie sua conta</S.Title>
      <S.Subtitle>Faça parte de um mundo de conhecimento</S.Subtitle>

      <S.FormGroup>
        <Input
          label="Nome"
          type="text"
          {...register("name", {
            required: true,
            minLength: 3,
            validate: {
              noNumbers: (value) => !/\d/.test(value), // Valida se não há números
              noSpecialChars: (value) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value), // Valida se não há caracteres especiais
            },
          })}
          isError={!!errors.name} // Define a propriedade isError com base na presença de erros
        ></Input>
        {errors?.name?.type === "required" && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            Campo necessário
          </S.ErrorMessage>
        )}
        {errors?.name?.type === "noSpecialChars" && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            Não pode conter caracteres especiais
          </S.ErrorMessage>
        )}
        {errors?.name?.type === "noNumbers" && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            Não pode conter números
          </S.ErrorMessage>
        )}
        {errors?.name?.type === "minLength" && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            Deve conter no mínimo 3 caracteres
          </S.ErrorMessage>
        )}
      </S.FormGroup>

      <S.FormGroup>
        <Input
          label="Sobrenome"
          type="text"
          {...register("surname", {
            required: true,
            minLength: 3,
            validate: {
              noNumbers: (value) => !/\d/.test(value), // Valida se não há números
              noSpecialChars: (value) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value), // Valida se não há caracteres especiais
            },
          })}
          isError={!!errors.surname}
        ></Input>
        {errors?.surname?.type === "required" && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            Campo necessário
          </S.ErrorMessage>
        )}

        {errors?.surname?.type === "noSpecialChars" && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            Não pode conter caracteres especiais
          </S.ErrorMessage>
        )}
        {errors?.surname?.type === "noNumbers" && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            Não pode conter números
          </S.ErrorMessage>
        )}

        {errors?.surname?.type === "minLength" && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            Deve conter no mínimo 3 caracteres
          </S.ErrorMessage>
        )}
      </S.FormGroup>

      <S.FormGroup>
        <Input
          label="E-mail"
          type="email"
          {...register("email", {
            required: true,
            validate: (value) => isEmail(value) || "Email fora do padrão",
          })}
          isError={!!errors.email}
        ></Input>
        {errors?.email?.type === "required" && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            Campo necessário
          </S.ErrorMessage>
        )}
        {errors?.email?.type === "validate" && (
          <S.ErrorMessage>
            <S.CircleIcon src={ErrorCircle} />
            {errors.email.message}
          </S.ErrorMessage>
        )}
      </S.FormGroup>
      <S.ButtonsWrapper>
        <S.Button onClick={handleSubmit(handleFormSubmit)}>Continuar</S.Button>
        <S.HaveLogin>
          Já tem uma conta? <S.LoginLink to="/login">Login</S.LoginLink>
        </S.HaveLogin>
      </S.ButtonsWrapper>
    </S.FormWraper>
  );
}
