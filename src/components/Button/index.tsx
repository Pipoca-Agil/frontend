import * as S from "./style";
type ButtonProps = {
  title: string;
  type: "button" | "submit" | "reset";
  variable?: "primary" | "secondary";
};
export function Button({ type, variable, title, ...props }: ButtonProps) {
  return (
    <S.Container type={type} {...props} variables={variable}>
      {title}
    </S.Container>
  );
}
