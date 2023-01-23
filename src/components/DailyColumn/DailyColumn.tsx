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
  const { loading, schedules, currentScheduleIndex, currentSchedule } =
    useSubjectsTableContext();

  const getStates = useCallback(
    (props: SubjectContent | null): ReactElement => {
      if (loading === true) {
        return (
          <LoadingSubject>
            <LoadingIcon />
            <span>carregando</span>
          </LoadingSubject>
        );
      }

      if (props === null) {
        return <EmptySubject />;
      } else {
        return <SubjectCard {...props} />;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, currentScheduleIndex]
  );

  return (
    <Wrapper>
      <Title>{schedules[currentScheduleIndex][id].name}</Title>
      <Divider />
      <SubjectsContainer>
        {currentSchedule[id].subs.map(
          (value: SubjectContent | null, index: number) => getStates(value)
        )}
      </SubjectsContainer>
    </Wrapper>
  );
};
