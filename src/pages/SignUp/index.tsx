import { useState } from "react";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Checkbox } from "../../components/Input/Checkbox";
import { Input } from "../../components/Input/Input";

import imagem from "../../assets/Imagem Ibson+Shape.svg";
import { createUser } from "../../services/api";
import * as S from "./style";

interface FormData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    email: "",
    password: ""
  });

  return (
    <>
      <Header />
      <S.Container>
        <S.Section>
          <div className="hidden md:block ">
            <img src={imagem} alt="ibson, dono do site/produto" />
          </div>
          <aside className="w-full max-w-[656px]">
            <S.Form>
              <S.TextBox>
                <h2 className="color-custom-BLACK-100 text-[1.75rem] font-semibold">
                  Crie sua conta
                </h2>
                <p className="color-custom-BLACK-100  text-center  text-xl font-normal lg:text-lg">
                  Tudo o que você precisa saber sobre o mundo ágil
                </p>
              </S.TextBox>
              <div className="flex w-full flex-wrap gap-6 lg:flex-nowrap ">
                <Input type="text" placeholder="Nome*" name="nome*" />
                <Input type="text" placeholder="Sobrenome*" name="surname*" />
              </div>
              <Input type="email" placeholder="Email*" name="email*" />
              <Input
                type="password"
                placeholder="Senha*"
                isPassword
                name="password"
              />
              <Input
                type="password"
                placeholder="Confirmar Senha*"
                isPassword
                name="confirmPassword"
              />
              <Checkbox />
              <Button variable="secondary" title="Criar" type="submit" />
            </S.Form>
          </aside>
        </S.Section>
      </S.Container>
      <Footer />
    </>
  );
}
