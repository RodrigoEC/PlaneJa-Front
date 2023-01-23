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
  const { schedules, currentScheduleIndex, currentSchedule } =
    useSubjectsTableContext();
  const [schedule, setSchedule] = useState(new Array(8).fill(null));

  // useEffect(() => {
  //   const newSchedule = Array.from(schedule);
  //   schedules[currentScheduleIndex][id].subs.forEach((element: SubjectContent) => {
  //     newSchedule[element.position] = element;
  //   });

  //   // console.log(newSchedule)
  //   console.log(schedules[currentScheduleIndex][id].subs)

  //   setSchedule(newSchedule);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [schedules[currentScheduleIndex], currentScheduleIndex]);
  // useEffect(() => {
  //   console.log(currentSchedule)
  // }, [currentSchedule])

  return (
    <Wrapper>
      <Title>{schedules[currentScheduleIndex][id].name}</Title>
      <Divider />
      <SubjectsContainer>
        {currentSchedule[id].subs.map(
          (value: SubjectContent | null, index: number) => {
            return value !== null ? (
              <SubjectCard key={index} {...value} />
            ) : (
              <EmptySubject key={index} />
            );
          }
        )}
      </SubjectsContainer>
    </Wrapper>
  );
};
