import { ReactElement } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import {
  Container,
  Wrapper,
  InnerWrapper,
  ProgressValue,
  Title,
} from "./styles";

export const Progress = (): ReactElement => {
  const { loading, studentRecord } = useExtractionContext();
  const { progress: studentProg } = studentRecord;

  return (
    <Container>
      <Title>Cadeiras cursadas</Title>
      <Wrapper>
        {/* loading ? 1 : 0 to prevent console error*/}
        <InnerWrapper
          progress={Number(studentProg) * 100}
          loading={loading ? 1 : 0}
        >
          <ProgressValue>{loading ? "??" : `${Number(studentProg) * 100}%`}</ProgressValue>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};