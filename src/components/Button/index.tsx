import * as S from "./style";
type ButtonProps = {
  title: string;
};
export function Button({ title, ...props }: ButtonProps) {
  return <S.Container {...props}>{title}</S.Container>;
}
