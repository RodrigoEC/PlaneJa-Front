import { ReactElement } from "react";
import {
  Wrapper,
  Text,
  GithubIcon
} from "./styles";

export const Footer = (): ReactElement => {
  return <Wrapper>
    <Text>Contribue em:</Text>
    <GithubIcon />
  </Wrapper>;
};
