import { ReactElement, useCallback, useEffect, useState } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import { Schedule, Subject } from "../../contexts/restraints.interfaces";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { SubjectContent } from "../../contexts/weeklySchedule.interfaces";
import { colors } from "../../util/colors";
import { SubjectCard } from "../SubjectCard/SubjectCard";
import { Loading } from "../SubjectData/SubjectData";
import {
  Wrapper,
  Title,
  Divider,
  SubjectsContainer,
  EmptySubject,
} from "./DailyColumn.style";

export const DailyColumn = ({
  columnInfo,
}: {
  columnInfo: { name: string; num: string };
}) => {
  const { TableLoading, currentSchedule } = useSubjectsTableContext();

  const { extractionLoading } = useExtractionContext();

  return (
    <Wrapper>
      <Title>{columnInfo.name}</Title>
      <Divider />
      <SubjectsContainer>
        {currentSchedule[Number(columnInfo.num) - 2].map(
          (subject: Subject | null, index: number) =>
            subject === null || TableLoading || extractionLoading ? (
              <EmptySubject key={index}>
                {TableLoading || extractionLoading && <Loading />}
              </EmptySubject>
            ) : (
              <SubjectCard
                subject={subject}
                variant={subject?.variant || "cyan"}
                key={index}
              />
            )
        )}
      </SubjectsContainer>
    </Wrapper>
  );
};
