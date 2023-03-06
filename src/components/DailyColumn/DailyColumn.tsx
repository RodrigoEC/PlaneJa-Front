import { ReactElement, useCallback } from "react";
import {
  useSubjectsTableContext,
} from "../../contexts/weeklySchedule";
import { SubjectContent, WeekSchedule } from "../../contexts/weeklySchedule.interfaces";
import { SubjectCard } from "../SubjectCard/SubjectCard";
import { Loading } from "../SubjectData/SubjectData";
import {
  Wrapper,
  Title,
  Divider,
  SubjectsContainer,
  EmptySubject,
} from "./DailyColumn.style";

export const DailyColumn = ({ index }: { index: keyof WeekSchedule }) => {
  const { loading, scheduleList, currentScheduleIndex, currentSchedule } =
    useSubjectsTableContext();

  const formatSubjectCard = useCallback(
    (props: SubjectContent | null, key: number): ReactElement =>
      props === null || loading ? (
        <EmptySubject key={key}>{loading && <Loading />}</EmptySubject>
      ) : (
        <SubjectCard {...props} key={key} />
      ),
    [currentScheduleIndex]
  );

  return (
    <Wrapper>
      <Title>{scheduleList[currentScheduleIndex][index].name}</Title>
      <Divider />
      <SubjectsContainer>
        {currentSchedule[index].subs.map(
          (value: SubjectContent | null, index: number) =>
            formatSubjectCard(value, index)
        )}
      </SubjectsContainer>
    </Wrapper>
  );
};
