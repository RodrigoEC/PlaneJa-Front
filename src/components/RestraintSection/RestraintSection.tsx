import { MouseEvent, ReactElement, useCallback } from "react";
import { SubjectsInput } from "../SubjectsInput/SubjectsInput";
import { NumInput } from "../NumInput/NumInput";
import {
  Divider,
  InputArea,
  Wrapper,
  SubjectsContainer,
  ButtonsContainer,
  Button,
} from "./RestraintSection.style";
import { useRestraintsContext } from "../../contexts/restraints";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { FixedSubject } from "../FixedSubject/FixedSubject";
import { useStudentDataContext } from "../../contexts/studentData";
import { Subject } from "../../contexts/restraints.interfaces";

export const RestraintSection = (): ReactElement => {
  const {
    setEssentialSubjects,
    essentialSubjects,
    subjectsBackup,
    setSubjectsBackup,
  } = useRestraintsContext();

  const { studentRecord } = useStudentDataContext();

  const { getSchedulesData } = useSubjectsTableContext();

  // TODO: Adicionar envio de dados para back
  const SubmitData = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      localStorage.setItem(
        "planeja@essential_subjects",
        JSON.stringify(essentialSubjects)
      );
      setSubjectsBackup(essentialSubjects.sort());
      getSchedulesData(studentRecord.subjects, essentialSubjects);
    },
    [essentialSubjects, setSubjectsBackup]
  );

  const cleanData = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setEssentialSubjects(subjectsBackup.sort());
    },
    [subjectsBackup, setEssentialSubjects]
  );

  return (
    <Wrapper>
      <ButtonsContainer>
        <Button
          onClick={SubmitData}
          disable={(
            subjectsBackup.toString() === essentialSubjects.toString()
          ).toString()}
        >
          Salvar
        </Button>{" "}
        <Divider />
        <Button
          disable={(
            subjectsBackup.toString() === essentialSubjects.toString()
          ).toString()}
          onClick={cleanData}
        >
          Restaurar
        </Button>
      </ButtonsContainer>
      {essentialSubjects?.length > 0 && (
        <SubjectsContainer>
          {essentialSubjects?.map((subject: Subject) => (
            <FixedSubject
              title={`${subject.name} - T${subject.class_num}`}
              key={`${subject.id}-fixed`}
            />
          ))}
        </SubjectsContainer>
      )}
      <InputArea>
        <NumInput />
        <Divider />
        <SubjectsInput />
      </InputArea>
    </Wrapper>
  );
};
