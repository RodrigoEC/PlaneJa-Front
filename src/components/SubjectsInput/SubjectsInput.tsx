import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { Add } from "../../assets/icons/Add";
import { useRecordExtractionContext } from "../../contexts/recordExtraction";
import { useRestraintsContext } from "../../contexts/restraints";
import { AddButton, Input, List, Wrapper } from "./SubjectsInput.style";

export const SubjectsInput = (): ReactElement => {
  const { numEssentialSubjects, essentialSubjects, setEssentialSubjects } =
    useRestraintsContext();
  const { studentRecord, availableSubjects } = useRecordExtractionContext();
  const [currentInput, setCurrentInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [invalidData, setInvalidData] = useState(false);

  const addClass = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrentInput("");
    if (
      availableSubjects.includes(currentInput.toUpperCase()) &&
      currentInput !== ""
    ) {
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
      studentRecord.subjects.length === 0 ||
        essentialSubjects.length >= numEssentialSubjects
    );
  }, [
    essentialSubjects.length,
    numEssentialSubjects,
    studentRecord?.subjects.length,
  ]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (
        !availableSubjects.includes(currentInput.toUpperCase()) &&
        currentInput !== ""
      )
        setInvalidData(true);
      else setInvalidData(false);
    }, 500);

    return () => clearTimeout(delay);
  }, [currentInput, availableSubjects]);

  return (
    <Wrapper
      onClick={() => setCurrentInput("")}
      className={invalidData ? "invalid" : ""}
    >
      <Input
        disabled={isDisabled}
        placeholder="Disciplinas fixas"
        onFocus={(e) => (e.target.value = "")}
        value={currentInput}
        onChange={(event) => setCurrentInput(event.target.value)}
        list="subjects"
      />
      <List id="subjects">
        {availableSubjects
          .filter((subject) => !essentialSubjects.includes(subject))
          .map((subject: string, index: number) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
      </List>
      <AddButton onClick={addClass} disabled={isDisabled || invalidData}>
        <Add aria-label="Cross icon" />
      </AddButton>
    </Wrapper>
  );
};
