import React, { useState } from "react";
import * as S from "./styled";
import WomanRegister from "../../assets/photos/woman-register.svg";
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
  const [firstStepData, setFirstStepData] = useState<FormData | null>(null);
  const [secondStepData, setSecondStepData] = useState<FormData | null>(null);

  function nextPage() {
    setStep(step + 1);
    console.log(step);
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (step === 1) {
      setFirstStepData(data);
      nextPage();
      joinObjects(data);
      return;
    }

    setSecondStepData(data);
    joinObjects(data);
  };

  function joinObjects(data: FormData) {
    if (step === 2 && firstStepData !== null) {
      // Junta os dois objetos
      const formData: FormData = {
        ...firstStepData,
        ...data,
      };
      console.log(formData);
      postDataFunction(formData);
    }
  }

  const postDataFunction = async (formData: FormData) => {
    const postData = await postRegister(formData);
  };

  return (
    <S.Container>
      <S.SideImageWraper>
        <S.SideImage src={WomanRegister} alt="Woman Register"></S.SideImage>
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
