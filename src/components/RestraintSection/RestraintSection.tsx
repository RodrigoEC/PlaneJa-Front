import { MouseEvent, ReactElement, useCallback } from "react";
import { SubjectsInput } from "../SubjectsInput/SubjectsInput";
import { NumInput } from "../NumInput/NumInput";
import { Subject } from "../Subject/Subject";
import {
  Divider,
  InputArea,
  Wrapper,
  SubjectsContainer,
  ButtonsContainer,
  Button,
} from "./RestraintSection.style";
import { useRestraintsContext } from "../../contexts/restraints";

export const RestraintSection = (): ReactElement => {
   const { setEssentialSubjects, essentialSubjects, essentialSubjectsBackup, setEssentialSubjectsBackup } =
    useRestraintsContext();

  // TODO: Adicionar envio de dados para back
  const SubmitData = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      localStorage.setItem("planeja@essential_subjects", JSON.stringify(essentialSubjects))
      setEssentialSubjectsBackup(essentialSubjects.sort());
    },
    [essentialSubjects, setEssentialSubjectsBackup]
  )

  const cleanData = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setEssentialSubjects(essentialSubjectsBackup.sort());
    },
    [essentialSubjectsBackup, setEssentialSubjects]
  );

  return (
    <Wrapper>
      <ButtonsContainer>
        <Button
          onClick={SubmitData}
          disable={
            essentialSubjectsBackup.toString() === essentialSubjects.toString()
              ? "T"
              : "F"
          }
        >
          Salvar
        </Button>{" "}
        |{" "}
        <Button
          disable={
            essentialSubjectsBackup.toString() === essentialSubjects.toString()
              ? "T"
              : "F"
          }
          onClick={cleanData}
        >
          Restaurar
        </Button>
      </ButtonsContainer>
      {essentialSubjects?.length > 0 && (
        <SubjectsContainer>
          {essentialSubjects.map((subject: string) => (
            <Subject key={subject} title={subject} />
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
