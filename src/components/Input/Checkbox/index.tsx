import { InputHTMLAttributes } from "react";
import React from "react";

import * as S from "./style";

interface checkBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  errorMessage?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, checkBoxProps>(
  ({ text, errorMessage, ...props }, ref) => (
    <>
      <div className="flex gap-2 items-baseline text-custom-BLACK-100 w-full">
        <S.Input ref={ref} {...props} type="checkbox" />
        <S.Label htmlFor="checked-checkbox">
          {text ? (
            text
          ) : (
            <p>
              Li e concordo com os <S.Link href="#">Termos de uso</S.Link> e{" "}
              <S.Link href="#">Política de Privacidade</S.Link>
            </p>
          )}
          {errorMessage && <S.P>{errorMessage}</S.P>}
        </S.Label>
      </div>
    </>
  )
);

Checkbox.displayName = "Checkbox";
