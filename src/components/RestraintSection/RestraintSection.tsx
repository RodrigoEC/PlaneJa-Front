import { ReactElement } from "react";
import { SubjectsInput } from "../SubjectsInput/SubjectsInput";
import { NumInput } from "../NumInput/NumInput";
import {
  Divider,
  InputArea,
  Wrapper,
} from "./RestraintSection.style";

export const RestraintSection = (): ReactElement => {

  return (
    <Wrapper>
      <InputArea>
        <NumInput />
        <Divider />
        <SubjectsInput />
      </InputArea>
    </Wrapper>
  );
};
