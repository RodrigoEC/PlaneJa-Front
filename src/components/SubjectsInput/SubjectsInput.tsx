import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { Add } from "../../assets/icons/Add";
import { useRestraintsContext } from "../../contexts/restraints";
import { Schedule, Subject } from "../../contexts/restraints.interfaces";
import { useStudentDataContext } from "../../contexts/studentData";
import { DayOfTheWeek, numberToDay } from "../../util/constants";
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
        !availableSubjects.filter((subject) => {
          const [title, classNum] = currentInput.toUpperCase().split(" - T");
          return title === subject.name && classNum === subject.class_num;
        }) &&
        currentInput !== ""
      )
        setInvalidData(true);
      else setInvalidData(false);
    }, 500);

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
          console.log(event.target.value);
          setCurrentInput(event.target.value);
        }}
        list="subjects"
      />
      <List id="subjects">
        {availableSubjects
          .filter((subject) => !essentialSubjects.includes(subject))
          .map((subject: Subject) => (
            <Option subject={subject} key={subject.id} />
          ))}
      </List>
      <AddButton onClick={addClass} disabled={isDisabled || invalidData}>
        <Add aria-label="Cross icon" />
      </AddButton>
    </Wrapper>
  );
};
