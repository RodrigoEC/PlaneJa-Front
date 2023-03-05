import { ReactElement } from "react";
import { useRecordContext } from "../../contexts/recordExtraction";
import {
  Container,
  Wrapper,
  InnerWrapper,
  ProgressValue,
  Title,
} from "./Progress.style";

export const Progress = (): ReactElement => {
  const { loading, studentRecord } = useRecordContext();
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
