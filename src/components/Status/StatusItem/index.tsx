import { ReactElement } from "react";
import { Wrapper, Title, Data, Atribute } from "./styles";

export const StatusItem = ({ title, current, max }: { title: string, current: number, max: number }): ReactElement => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Data>{current}/{max}</Data>
      <Atribute>créditos</Atribute>
    </Wrapper>
  );
};

StatusItem.defaultProps = {
  current: 0,
  max: '--'
}