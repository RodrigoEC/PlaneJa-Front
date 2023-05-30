import { ReactElement, useState } from "react";
import { SubjectsInput } from "../SubjectsInput/SubjectsInput";
import { useRestraintsContext } from "../../contexts/restraints";
import { Subject } from "../../contexts/restraints.interfaces";
import { SubjectAvailableCard } from "../SubjectAvailableCard/SubjectAvailableCard";
import { Loading } from "../SubjectData/SubjectData";
import {
  SubjectsContainer,
  Wrapper,
  LoadingContainer,
  EmptyContainer,
} from "./RestraintSection.style";

export const RestraintSection = (): ReactElement => {
  const { filteredSubjects } = useRestraintsContext();
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
        ) : filteredSubjects.length === 0 ? (
          <EmptyContainer>Nenhuma disciplina encontrada</EmptyContainer>
        ) : (
          filteredSubjects.map((subject: Subject, index: number) => (
            <SubjectAvailableCard key={index} subject={subject} />
          ))
        )}
      </SubjectsContainer>
    </Wrapper>
  );
};
