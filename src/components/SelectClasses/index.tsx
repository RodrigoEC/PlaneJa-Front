import { ReactElement, SyntheticEvent, useState } from "react";
import { Add } from "../../assets/icons/Add";
import { useExtractionContext } from "../../contexts/extraction";
import { useRestraintsContext } from "../../contexts/restraints";
import { AddButton, Input, List, Wrapper } from "./styles";

export const SelectClasses = (): ReactElement => {
  const { setEssentialSubjects, subjects, studentSubjects } =
    useRestraintsContext();
  const { studentRecord } = useExtractionContext();
  const [currentInput, setCurrentInput] = useState("");

  const addClass = (event: SyntheticEvent) => {
    event.preventDefault();
    setCurrentInput("");

    if (subjects.includes(currentInput)) {
      setEssentialSubjects((previous: string[]) => {
        if (previous.includes(currentInput)) {
          return previous;
        }
        return [...previous, currentInput];
      });
    }
  };

  return (
    <Wrapper>
      <Input
        disabled={subjects.length === 0 || studentRecord?.classes.length === 0}
        placeholder="Disciplinas fixas"
        onFocus={(e) => (e.target.value = "")}
        value={currentInput}
        onChange={(event) => setCurrentInput(event.target.value)}
        list="subjects"
      />
      <List id="subjects">
        {studentSubjects?.map((subject: string, i: number) => (
          <option key={i} value={subject}>
            {subject}
          </option>
        ))}
      </List>
      <AddButton
        onClick={addClass}
        disabled={subjects.length === 0 || studentRecord?.classes.length === 0}
      >
        <Add />
      </AddButton>
    </Wrapper>
  );
};
