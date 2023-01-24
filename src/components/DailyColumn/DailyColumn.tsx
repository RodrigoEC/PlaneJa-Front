import { ReactElement, useCallback } from "react";
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
  LoadingSubject,
  LoadingIcon,
} from "./DailyColumn.style";

export const DailyColumn = ({ id }: { id: keyof WeekSchedule }) => {
  const {
    loading,
    schedules,
    currentScheduleIndex,
    getSchedulesData,
    currentSchedule,
  } = useSubjectsTableContext();

  const getStates = useCallback(
    (props: SubjectContent | null, key: number): ReactElement => {
      if (loading === true) {
        return (
          <LoadingSubject key={key}>
            <LoadingIcon />
            <span>carregando</span>
          </LoadingSubject>
        );
      }

      if (props === null) {
        return <EmptySubject key={key} onClick={(e) => getSchedulesData()} />;
      } else {
        return <SubjectCard {...props} key={key} />;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentScheduleIndex]
  );

  return (
    <Wrapper>
      <Title>{schedules[currentScheduleIndex][id].name}</Title>
      <Divider />
      <SubjectsContainer>
        {currentSchedule[id].subs.map(
          (value: SubjectContent | null, index: number) =>
            getStates(value, index)
        )}
      </SubjectsContainer>
    </Wrapper>
  );
};
