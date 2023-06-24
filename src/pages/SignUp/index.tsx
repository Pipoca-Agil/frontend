import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Checkbox } from "../../components/Input/Checkbox";
import { Input } from "../../components/Input/Input";

import imagem from "../../assets/Imagem Ibson+Shape.svg";
import * as S from "./style";

export function SignUp() {
  return (
    <>
      <Header />
      <S.Container>
        <S.Section>
          <div className="hidden md:block ">
            <img src={imagem} alt="ibson, dono do site/produto" />
          </div>
          <aside className="h-[858px] w-full max-w-[656px]">
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
                <Input type="text" placeholder="Nome*" name="name" />
                <Input type="text" placeholder="Sobrenome*" name="surname" />
              </div>
              <Input name="email" type="email" placeholder="Email*" />
              <Input
                name="password"
                type="password"
                placeholder="Senha*"
                isPassword
                size={24}
              />
              <Input
                name="ConfirmPassword"
                type="password"
                placeholder="Confirmar Senha*"
                isPassword
                size={24}
              />
              <Checkbox />
              <Button title="Criar" />
            </S.Form>
          </aside>
        </S.Section>
      </S.Container>
      <Footer />
    </>
  );
}
