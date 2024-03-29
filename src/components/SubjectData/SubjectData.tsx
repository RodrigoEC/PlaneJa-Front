import { ReactElement } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import {
  Wrapper,
  Title,
  Data,
  Atribute,
  LoadingContainer,
} from "./SubjectData.style";
import { useModalContext } from "../../contexts/modal";
import { useStudentDataContext } from "../../contexts/studentData";
import { Subject } from "../../contexts/weeklySchedule.interfaces";

export const SubjectData = ({
  title,
  status,
  type,
}: {
  title: string;
  type: string;
  status: string[];
}): ReactElement => {
  const { extractionLoading } = useExtractionContext();
  const { handleChangeContent } = useModalContext();
  const { studentRecord } = useStudentDataContext();


  const subsTaken = studentRecord.subjects.filter((subject) => subject?.status === 'Aprovado')
  const current = subsTaken.filter((subject) => subject.type === type).reduce((sum, subject) => sum + subject.credits, 0) || "--";
  const max = status[1] || "--";

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Data>
        {extractionLoading ? <Loading /> : current}/{extractionLoading ? <Loading /> : max}
      </Data>
      <Atribute disabled={current === "--"} onClick={() => handleChangeContent(type)}>detalhar</Atribute>
    </Wrapper>
  );
};

SubjectData.defaultProps = {
  current: 0,
  max: "--",
};

export const Loading = () => {
  return (
    <LoadingContainer>
      <span>-</span>
      <span>-</span>
    </LoadingContainer>
  );
};
