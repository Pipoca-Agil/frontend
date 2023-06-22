import logo from "../../assets/Logo.svg";
import * as S from "./style";

export function Header() {
  return (
    <S.Container>
      <S.Nav>
        <img src={logo} alt="foto do ibson, dono do site" />
      </S.Nav>
    </S.Container>
  );
}
