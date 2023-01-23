import { useEffect, useState } from "react";
import {
  SubjectContent,
  useSubjectsTableContext,
  WeekSchedule,
} from "../../contexts/subjectsTable";
import { SubjectCard } from "../SubjectCard/SubjectCard";
import {
  Wrapper,
  Title,
  Divider,
  SubjectsContainer,
  EmptySubject,
} from "./DailyColumn.style";

export const DailyColumn = ({ id }: { id: keyof WeekSchedule }) => {
  const { subjects, currentSchedule } = useSubjectsTableContext();
  const [schedule, setSchedule] = useState(new Array(8).fill(null));

  useEffect(() => {
    const newSchedule = Array.from(schedule);
    subjects[currentSchedule][id].subs.forEach((element: SubjectContent) => {
      newSchedule[element.position] = element;
    });

    setSchedule(newSchedule);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjects[currentSchedule][id]]);

  return (
    <Wrapper>
      <Title>{subjects[currentSchedule][id].name}</Title>
      <Divider />
      <SubjectsContainer>
        {schedule.map((value: SubjectContent, index: number) => {
          return schedule[index] !== null ? (
            <SubjectCard {...value} />
          ) : (
            <EmptySubject key={index} />
          );
        })}
      </SubjectsContainer>
    </Wrapper>
  );
};
