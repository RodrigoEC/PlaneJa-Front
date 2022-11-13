import { ReactElement } from "react";
import { SubjectsInput } from "../SubjectsInput/SubjectsInput";
import { NumInput } from "../NumInput/NumInput";
import { Subject } from "../Subject/Subject";
import {
  Divider,
  InputArea,
  Wrapper,
  SubjectsContainer,
} from "./RestraintSection.style";
import { useRestraintsContext } from "../../contexts/restraints";

export const RestraintSection = (): ReactElement => {
  const { essentialSubjects } = useRestraintsContext()

  return (
    <Wrapper>
      <InputArea>
        <NumInput />
        <Divider />
        <SubjectsInput />
      </InputArea>
      <SubjectsContainer>
        {essentialSubjects.map((subject: string) => (
          <Subject key={subject} title={subject} />
        ))}
      </SubjectsContainer>
    </Wrapper>
  );
};
