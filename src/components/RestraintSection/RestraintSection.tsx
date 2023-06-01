import { ReactElement, useState } from "react";
import { SubjectsInput } from "../SubjectsInput/SubjectsInput";
import { SubjectAvailableCard } from "../SubjectAvailableCard/SubjectAvailableCard";
import { Loading } from "../SubjectData/SubjectData";
import {
  SubjectsContainer,
  Wrapper,
  LoadingContainer,
  EmptyContainer,
} from "./RestraintSection.style";
import { useSubjectsTableContext } from "../../contexts/weeklySchedule";
import { Subject } from "../../contexts/weeklySchedule.interfaces";

export const RestraintSection = (): ReactElement => {
  const { searchedSubjects } = useSubjectsTableContext();
  const [loading, setLoading] = useState(false);

  return (
    <Wrapper>
      <SubjectsInput setLoading={setLoading} />
      <SubjectsContainer>
        {loading ? (
          <LoadingContainer>
            <span>Carregando</span>
            <Loading />
          </LoadingContainer>
        ) : searchedSubjects.length === 0 ? (
          <EmptyContainer>Nenhuma disciplina encontrada</EmptyContainer>
        ) : (
          searchedSubjects.map((subject: Subject, index: number) => (
            <SubjectAvailableCard key={index} subject={subject} />
          ))
        )}
      </SubjectsContainer>
    </Wrapper>
  );
};
