import { MouseEventHandler, ReactElement } from "react";
import { useTheme } from "styled-components";
import { Logo } from "../../assets/icons/Logo";
import { Switch } from "../Switch";
import { Wrapper, Github, SideIcons } from "./styles";

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
        <Github color={theme.colors.primary} />
        <Switch handleSwitch={themeHandler} />
      </SideIcons>
    </Wrapper>
  );
};
