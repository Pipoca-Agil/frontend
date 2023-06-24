import * as S from "./style";
type ButtonProps = {
  title: string;
  variable?: "primary" | "secondary";
};
export function Button({ variable, title, ...props }: ButtonProps) {
  return (
    <S.Container variables={variable} {...props}>
      {title}
    </S.Container>
  );
}
