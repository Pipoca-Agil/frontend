import { InputHTMLAttributes } from "react";

import * as S from "./style";

interface checkBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  errorMessage?: string;
}

export function Checkbox({ text }: checkBoxProps) {
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        <S.Input id="checked-checkbox" type="checkbox" />
        <S.Label htmlFor="checked-checkbox">
          {text ? (
            text
          ) : (
            <p>
              Li e concordo com os <S.Link href="#">Termos de uso</S.Link> e{" "}
              <S.Link href="#">Política de Privacidade</S.Link>
            </p>
          )}
        </S.Label>
      </div>
    </>
  );
}
