import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { Add } from "../../assets/icons/Add";
import { useRestraintsContext } from "../../contexts/restraints";
import { Schedule, Subject } from "../../contexts/restraints.interfaces";
import { useStudentDataContext } from "../../contexts/studentData";
import { DayOfTheWeek, numberToDay } from "../../util/constants";
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
    if (
      availableSubjects.filter((subject) => {
        const [title, classNum] = currentInput.toUpperCase().split(" - T");
        return title === subject.name && classNum === subject.class_num;
      }) &&
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
          .filter(
            (subject) =>
              !essentialSubjects.includes(
                `${subject.name} - T${subject.class_num}`
              )
          )
          .map((subject: Subject, index: number) => {
            const subjectInfo = subject?.schedule.map(
              (element: Schedule) =>
                ` ${numberToDay[element.day as DayOfTheWeek]} (${
                  element.init_time
                } - ${element.end_time})`
            );
            return (
              <option
                key={index}
                value={`${subject?.name} - T${subject?.class_num}`}
              >
                {`Dias:${subjectInfo}`}
              </option>
            );
          })}
      </List>
      <AddButton onClick={addClass} disabled={isDisabled || invalidData}>
        <Add aria-label="Cross icon" />
      </AddButton>
    </Wrapper>
  );
};
