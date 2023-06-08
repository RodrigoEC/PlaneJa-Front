import { ReactElement } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import { useStudentDataContext } from "../../contexts/studentData";
import {
  Container,
  Wrapper,
  InnerWrapper,
  ProgressValue,
  Title,
} from "./Progress.style";

export const Progress = (): ReactElement => {
  const { studentRecord } = useStudentDataContext();
  const { extractionLoading } = useExtractionContext();
  const { progress } = studentRecord;
  const studenProgress = Number(progress) * 100;

  return (
    <Container>
      <Title>Cadeiras cursadas</Title>
      <Wrapper>
        {/* loading ? 1 : 0 to prevent console error*/}
        <InnerWrapper progress={studenProgress} loading={extractionLoading.toString()}>
          <ProgressValue>{extractionLoading ? "??" : `${studenProgress.toFixed()}%`}</ProgressValue>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
