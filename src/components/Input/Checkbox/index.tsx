import { Link } from "react-router-dom";

import * as S from "./style";

type Checkbox = {
  text?: string;
};
export function Checkbox({ text }: Checkbox) {
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
