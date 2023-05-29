import { MouseEvent, ReactElement, useCallback } from "react";
import { SubjectsInput } from "../SubjectsInput/SubjectsInput";
import { NumInput } from "../NumInput/NumInput";
import {
  Divider,
  InputArea,
  Wrapper,
  ButtonsContainer,
  Button,
} from "./RestraintSection.style";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { useStudentDataContext } from "../../contexts/studentData";

export const RestraintSection = (): ReactElement => {

  return (
    <Wrapper>
      <InputArea>
        <SubjectsInput />
      </InputArea>
    </Wrapper>
  );
};
