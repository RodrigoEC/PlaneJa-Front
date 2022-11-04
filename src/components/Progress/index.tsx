import { ReactElement } from "react";
import { useExtractionContext } from "../../contexts/extraction";
import {
  Container,
  Wrapper,
  InnerWrapper,
  ProgressValue,
  Title,
} from "./styles";

export const Progress = ({ progress }: { progress: number }): ReactElement => {
  const { loading } = useExtractionContext();

  return (
    <Container>
      <Title>Cadeiras cursadas</Title>
      <Wrapper>
        <InnerWrapper progress={progress * 100} loading={loading}>
          <ProgressValue>{loading ? '??' : `${progress * 100}%`}</ProgressValue>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

Progress.defaultProps = {
  progress: 0,
};
