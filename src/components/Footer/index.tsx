import { ReactElement } from "react";
import { Wrapper, Text, GithubIcon } from "./styles";

export const Footer = (): ReactElement => {
  return (
    <Wrapper>
      <Text>Contribua em:</Text>
      <GithubIcon />
    </Wrapper>
  );
};
