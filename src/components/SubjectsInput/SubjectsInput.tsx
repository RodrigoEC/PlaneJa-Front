import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { Add } from "../../assets/icons/Add";
import { useExtractionContext } from "../../contexts/extraction";
import { useRestraintsContext } from "../../contexts/restraints";
import { capitalize } from "../../util/util";
import { AddButton, Input, List, Wrapper } from "./SubjectsInput.style";

export const SubjectsInput = (): ReactElement => {
  const {
    numEssentialSubjects,
    essentialSubjects,
    setEssentialSubjects,
    subjects,
    studentSubjects,
    setStudentSubjects,
  } = useRestraintsContext();
  const { studentRecord } = useExtractionContext();
  const [currentInput, setCurrentInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [invalidData, setInvalidData] = useState(false);

  const addClass = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentInput("");
    if (studentSubjects.includes(capitalize(currentInput)) && currentInput !== "") {
      setStudentSubjects((previous: string[]) =>
        previous.filter((subject: string) => currentInput !== subject)
      );

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

  useEffect(() => {
    const delay = setTimeout(() => {
      if (
        !studentSubjects.includes(capitalize(currentInput)) &&
        currentInput !== ""
      )
        setInvalidData(true);
      else setInvalidData(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, [currentInput, studentSubjects]);

  useEffect(() => console.log(invalidData), [invalidData]);

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
        {studentSubjects?.map((subject: string, index: number) => (
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
