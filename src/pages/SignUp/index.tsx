import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

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
              <div className=" mb-8 flex flex-col items-center justify-center gap-6 lg:mb-16">
                <h2 className="color-custom-BLACK-100 text-[1.75rem] font-semibold">
                  Crie sua conta
                </h2>
                <p className="color-custom-BLACK-100  text-center  text-xl font-normal lg:text-lg">
                  Tudo o que você precisa saber sobre o mundo ágil
                </p>
              </div>
              <Button title="Criar" />
            </S.Form>
          </aside>
        </S.Section>
      </S.Container>
      <Footer />
    </>
  );
}
