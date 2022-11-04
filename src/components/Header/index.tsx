import { MouseEventHandler, ReactElement } from "react";
import { useTheme } from "styled-components";
import { Switch } from "../Switch";
import { Wrapper, Github, SideIcons, Logo } from "./styles";

export const Header = ({
  themeHandler,
}: {
  themeHandler: MouseEventHandler;
}): ReactElement => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Logo color={theme.colors.primary} />
      <SideIcons>
        <Github />
        <Switch handleSwitch={themeHandler} />
      </SideIcons>
    </Wrapper>
  );
};
