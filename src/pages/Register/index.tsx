import React, { useState } from "react";
import * as S from "./styled";
import IbsonFirstStep from "../../assets/photos/ibson-register.svg";
import IbsonSecondStep from "../../assets/photos/ibson-register-2.svg";
import { SubmitHandler } from "react-hook-form";
import FirstStepRegister from "./FirstStepRegister";
import SecondStepRegister from "./SecondStepRegister";
import { postRegister } from "../../api/Register";

interface FormData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export default function Register() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData | null>(null);

  const nextPage = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (step === 1) {
      setFormData(data);
      nextPage();
    } else if (step === 2 && formData !== null) {
      const combinedData: FormData = {
        ...formData,
        ...data,
      };
      postDataFunction(combinedData);
    }
  };

  const postDataFunction = async (formData: FormData) => {
    try {
      const response = await postRegister(formData);
      // Lide com a resposta aqui
    } catch (error) {
      // Lide com erros aqui
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <S.Container>
      <S.SideImageWraper>
        <S.SideImage
          secondStepImage={step === 1 ? false : true}
          src={step === 1 ? IbsonFirstStep : IbsonSecondStep}
          alt="Ibson"
        />
      </S.SideImageWraper>
      <S.FormWraper>
        {step === 1 ? (
          <FirstStepRegister onSubmit={onSubmit} />
        ) : (
          <SecondStepRegister onSubmit={onSubmit} />
        )}
      </S.FormWraper>
    </S.Container>
  );
}
