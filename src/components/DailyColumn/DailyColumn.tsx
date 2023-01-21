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
  const { subjects } = useSubjectsTableContext();
  const [schedule, setSchedule] = useState(new Array(8).fill(null));

  console.log(id);
  useEffect(() => {
    const newSchedule = Array.from(schedule);
    subjects[id].subs.forEach((element: SubjectContent) => {
      newSchedule[element.position] = element;
    });

    setSchedule(newSchedule);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjects[id]]);

  return (
    <Wrapper>
      <Title>{subjects[id].name}</Title>
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
