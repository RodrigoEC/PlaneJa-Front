import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { Add } from "../../assets/icons/Add";
import { useExtractionContext } from "../../contexts/extraction";
import { useRestraintsContext } from "../../contexts/restraints";
import { Subject } from "../../contexts/restraints.interfaces";
import { useStudentDataContext } from "../../contexts/studentData";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { Option } from "../Option/Option";
import { AddButton, Input, List, Wrapper } from "./SubjectsInput.style";

export const SubjectsInput = (): ReactElement => {
  const {
    numEssentialSubjects,
    essentialSubjects,
    setEssentialSubjects,
    availableSubjects,
  } = useRestraintsContext();
  const { studentRecord } = useStudentDataContext();
  const { extractionLoading } = useExtractionContext();
  const { TableLoading } = useSubjectsTableContext()
  const [currentInput, setCurrentInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [invalidData, setInvalidData] = useState(false);

  const addClass = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrentInput("");
    const [name, num] = currentInput.split(" - T");
    const subject = availableSubjects.find(
      (subject: Subject) => subject.name === name && subject.class_num === num
    );

    setEssentialSubjects((previous: Subject[]) => {
      if (previous.includes(subject as Subject)) {
        return previous;
      }
      return [subject, ...previous];
    });
  };

  useEffect(() => {
    setIsDisabled(
      studentRecord.subjects.length === 0 ||
        essentialSubjects.length >= numEssentialSubjects ||
        extractionLoading ||
        TableLoading
    );
  }, [
    essentialSubjects.length,
    numEssentialSubjects,
    studentRecord?.subjects.length,
    extractionLoading,
  ]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (
        !availableSubjects
          .map((s) => `${s.name} - T${s.class_num}`)
          .includes(currentInput.toUpperCase()) &&
        currentInput !== ""
      )
        setInvalidData(true);
      else setInvalidData(false);
    }, 300);

    return () => clearTimeout(delay);
  }, [currentInput, essentialSubjects]);

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
        onChange={(event) => {
          setCurrentInput(event.target.value);
        }}
        list="subjects"
      />
      <List id="subjects">
        {availableSubjects
          .filter(
            (subject) =>
              !essentialSubjects
                .map((element) => element.name)
                .includes(subject.name)
          )
          .map((subject: Subject) => {
            return <Option subject={subject} key={subject.id} />;
          })}
      </List>
      <AddButton
        onClick={addClass}
        disabled={isDisabled || invalidData || currentInput === ""}
      >
        <Add aria-label="Cross icon" />
      </AddButton>
    </Wrapper>
  );
};
