import { ReactElement } from "react";
import { useStudentRecordContext } from "../../contexts/studentRecord";
import {
  Container,
  Wrapper,
  InnerWrapper,
  ProgressValue,
  Title,
} from "./Progress.style";

export const Progress = (): ReactElement => {
  const { loading, studentRecord } = useStudentRecordContext();
  const { progress } = studentRecord;
  const studenProgress = Number(progress) * 100;

  return (
    <Container>
      <Title>Cadeiras cursadas</Title>
      <Wrapper>
        {/* loading ? 1 : 0 to prevent console error*/}
        <InnerWrapper progress={studenProgress} loading={loading ? 1 : 0}>
          <ProgressValue>{loading ? "??" : `${studenProgress}%`}</ProgressValue>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};
