import { MouseEventHandler, ReactElement } from "react";
import { Switch } from "../Switch/Switch";
import { Wrapper, Github, SideIcons, Logo } from "./Header.style";

export const Header = ({
  themeHandler,
}: {
  themeHandler: MouseEventHandler;
}): ReactElement => {

  return (
    <Wrapper>
      <Logo />
      <SideIcons>
        <Github />
        <Switch handleSwitch={themeHandler} />
      </SideIcons>
    </Wrapper>
  );
};
