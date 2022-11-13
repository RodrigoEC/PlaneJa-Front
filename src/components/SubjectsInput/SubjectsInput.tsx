import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { Add } from "../../assets/icons/Add";
import { useExtractionContext } from "../../contexts/extraction";
import { useRestraintsContext } from "../../contexts/restraints";
import { AddButton, Input, List, Wrapper } from "./SubjectsInput.style";

export const SubjectsInput = (): ReactElement => {
  const {
    numEssentialSubjects,
    essentialSubjects,
    setEssentialSubjects,
    subjects,
    studentSubjects,
  } = useRestraintsContext();
  const { studentRecord } = useExtractionContext();
  const [currentInput, setCurrentInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const addClass = (event: SyntheticEvent) => {
    event.preventDefault();
    setCurrentInput("");

    if (studentSubjects.includes(currentInput)) {
      setEssentialSubjects((previous: string[]) => {
        if (previous.includes(currentInput)) {
          return previous;
        }
        return [currentInput, ...previous];
      });
    }
  };

  useEffect(() => {
    setIsDisabled(
      subjects.length === 0 ||
        studentRecord?.classes.length === 0 ||
        essentialSubjects.length >= numEssentialSubjects
    );
  }, [
    essentialSubjects.length,
    numEssentialSubjects,
    studentRecord?.classes.length,
    subjects.length,
  ]);

  return (
    <Wrapper>
      <Input
        disabled={isDisabled}
        placeholder="Disciplinas fixas"
        onFocus={(e) => (e.target.value = "")}
        value={currentInput}
        onChange={(event) => setCurrentInput(event.target.value)}
        list="subjects"
      />
      <List id="subjects">
        {studentSubjects?.map((subject: string, index: number) => (
          <option key={index} value={subject}>
            {subject}
          </option>
        ))}
      </List>
      <AddButton onClick={addClass} disabled={isDisabled}>
        <Add />
      </AddButton>
    </Wrapper>
  );
};
