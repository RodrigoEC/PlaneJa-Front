import { MouseEventHandler, ReactElement } from "react";
import { useStudentDataContext } from "../../contexts/studentData";
import { capitalize } from "../../util/util";
import { Switch } from "../Switch/Switch";
import { Wrapper, Github, SideIcons, Logo, Name } from "./Header.style";

export const Header = ({
  themeHandler,
}: {
  themeHandler: MouseEventHandler;
}): ReactElement => {
  const { studentRecord } = useStudentDataContext();
  const nameList = studentRecord.name.split(' ')
  const name = [nameList[0], nameList.slice(-1)[0]].join(' ')

  return (
    <Wrapper>
      <Logo />
      <SideIcons>
        <Name>{`${studentRecord.enrollment_number} - ${capitalize(name)}` || '--'}</Name>
        <Github aria-label="Github icon on the header" />
        <Switch handleSwitch={themeHandler} />
      </SideIcons>
    </Wrapper>
  );
};
