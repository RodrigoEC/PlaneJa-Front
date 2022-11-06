import { ReactElement } from "react";
import { SelectClasses } from "../SelectClasses";
import { SubjectInput } from "../SubjectsInput";
import {
  Divider,
  EssentialContainer,
  InputArea,
  Wrapper,
} from "./styles";

export const Settings = (): ReactElement => {

  return (
    <Wrapper>
      <InputArea>
        <SubjectInput />
        <Divider />
        <SelectClasses />
      </InputArea>
      <EssentialContainer />
    </Wrapper>
  );
};
